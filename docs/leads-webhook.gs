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
    return json({ ok: true, row: sheet.getLastRow() });
  } catch (err) {
    // Logged to the Apps Script execution log, visible under Executions.
    console.error('lead webhook failed: ' + err);
    return json({ ok: false, error: 'server error' });
  }
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
