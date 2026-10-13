/**
 * Vidyam deAi - lead webhook for Google Sheets.
 *
 * Paste this into Extensions > Apps Script on the leads spreadsheet, set
 * SHARED_TOKEN below, then deploy it as a web app. Setup steps and the
 * matching environment variables are in docs/lead-delivery.md.
 *
 * It receives the JSON that lib/integrations/leads.ts posts:
 *   { type: "workshop", data: { ... }, submittedAt: "2026-10-11T09:00:00.000Z", token: "..." }
 */

// Must match SHEETS_WEBHOOK_TOKEN in the site's environment.
// Leave empty only if you accept that anyone with the URL can append rows.
var SHARED_TOKEN = 'CHANGE_ME';

// One tab per lead type, created on first use.
var SHEET_PREFIX = 'leads-';

// Who gets an email for every new submission. Comma-separate several addresses.
// Leave empty to send to the Google account that owns this script.
// Set NOTIFY to false to switch the emails off.
var NOTIFY = true;
var NOTIFY_EMAIL = '';

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return json({ ok: false, error: 'empty body' });
    }

    var payload = JSON.parse(e.postData.contents);

    if (SHARED_TOKEN && payload.token !== SHARED_TOKEN) {
      // Deliberately vague: do not tell a prober whether the token exists.
      return json({ ok: false, error: 'rejected' });
    }

    var type = String(payload.type || 'unknown').replace(/[^a-z0-9-]/gi, '');
    var data = payload.data || {};
    var sheet = getSheet(SHEET_PREFIX + type);

    // Header row is the union of fields seen so far, so a new form field does not
    // silently drop. Existing columns keep their position.
    var headers = sheet.getLastRow() > 0
      ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
      : [];

    if (headers.length === 0) {
      headers = ['submittedAt'].concat(Object.keys(data));
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    } else {
      var added = false;
      Object.keys(data).forEach(function (key) {
        if (headers.indexOf(key) === -1) {
          headers.push(key);
          added = true;
        }
      });
      if (added) {
        sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
      }
    }

    var row = headers.map(function (key) {
      if (key === 'submittedAt') return payload.submittedAt || new Date().toISOString();
      var value = data[key];
      if (value === null || value === undefined) return '';
      // Arrays (such as the selected class groups) become a readable list.
      return Array.isArray(value) ? value.join(', ') : String(value);
    });

    sheet.appendRow(row);
    var rowNumber = sheet.getLastRow();

    // The row is already saved, so a mail failure must never fail the request.
    var mailed = notifyOwner(type, headers, row, rowNumber);

    return json({ ok: true, row: rowNumber, mailed: mailed });
  } catch (err) {
    // Logged to the Apps Script execution log, visible under Executions.
    console.error('lead webhook failed: ' + err);
    return json({ ok: false, error: 'server error' });
  }
}

/**
 * Emails the owner a summary of the new row. Returns true if the mail was handed to Gmail.
 * Uses the script owner's Gmail quota (about 100 recipients a day on a free account).
 */
function notifyOwner(type, headers, row, rowNumber) {
  if (!NOTIFY) return false;
  try {
    var to = NOTIFY_EMAIL || Session.getEffectiveUser().getEmail();
    if (!to) return false;

    var book = SpreadsheetApp.getActiveSpreadsheet();
    var value = function (key) {
      var i = headers.indexOf(key);
      return i === -1 ? '' : String(row[i]);
    };

    var lines = [];
    var htmlRows = [];
    headers.forEach(function (key, i) {
      if (row[i] === '') return;
      lines.push(key + ': ' + row[i]);
      htmlRows.push(
        '<tr><td style="padding:6px 12px 6px 0;color:#545c72;vertical-align:top">' + escapeHtml(key) +
        '</td><td style="padding:6px 0"><b>' + escapeHtml(String(row[i])) + '</b></td></tr>'
      );
    });

    var who = value('schoolName') || value('contactName') || 'website visitor';
    var subject = 'New ' + type + ' request: ' + who;
    var sheetUrl = book.getUrl();

    var options = {
      name: 'Vidyam deAi Website',
      htmlBody:
        '<p>A new <b>' + escapeHtml(type) + '</b> request came in from the website.</p>' +
        '<table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">' +
        htmlRows.join('') + '</table>' +
        '<p><a href="' + sheetUrl + '">Open the sheet</a> (row ' + rowNumber + ')</p>'
    };
    // Reply goes straight to the person who filled in the form.
    var replyTo = value('email');
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyTo)) options.replyTo = replyTo;

    MailApp.sendEmail(to, subject, lines.join('\n') + '\n\nSheet: ' + sheetUrl + ' (row ' + rowNumber + ')', options);
    return true;
  } catch (err) {
    console.error('lead notification failed: ' + err);
    return false;
  }
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/**
 * Run this once from the editor (select "authorizeMail", click Run) after pasting a new
 * version of the script. It makes Google ask for the "send email" permission and sends
 * you a test mail. Without that permission the web app saves rows but cannot email.
 */
function authorizeMail() {
  var to = NOTIFY_EMAIL || Session.getEffectiveUser().getEmail();
  MailApp.sendEmail(to, 'Vidyam deAi lead emails are switched on', 'This is a test. New website requests will now arrive here.');
}

/** A GET is only ever a human checking the deployment is alive. */
function doGet() {
  return json({ ok: true, service: 'vidyam-deai lead webhook' });
}

function getSheet(name) {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  return book.getSheetByName(name) || book.insertSheet(name);
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
