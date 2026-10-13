# Lead delivery

Where a submitted form goes, and how to set it up. The code is in
`lib/integrations/leads.ts`, called from `app/actions/workshop.ts`.

## How it behaves

`deliverLead` sends every lead to every configured destination. Destinations are independent:
if Resend is down but Sheets works, the lead is still saved and the failure is logged.

| Configured | Result |
|---|---|
| Nothing, in development | Lead printed to the terminal. The visitor sees success. |
| Nothing, in production | Treated as a **failure**. The visitor is asked to try again, and the server logs `NO DESTINATION CONFIGURED`. |
| One or more destinations | Success if at least one accepted it. Failures are logged. |

That production rule matters: without it the form thanks a principal for a request that
reached nothing at all.

## 1. Google Sheets

1. Create a spreadsheet for leads.
2. **Extensions → Apps Script**. Delete the placeholder and paste `docs/leads-webhook.gs`.
3. Replace `CHANGE_ME` in `SHARED_TOKEN` with a long random string. Generate one with:

   ```bash
   node -e "console.log(require('crypto').randomBytes(24).toString('base64url'))"
   ```

4. **Deploy → New deployment → Web app.** Set *Execute as* to **Me**, and
   *Who has access* to **Anyone**. Google requires "Anyone" for the site to post to it
   without a Google login — the shared token is what actually protects the endpoint.
5. Authorise when prompted. Google shows an "unverified app" warning because the script
   is your own; continue through *Advanced → Go to (project)*.
6. Copy the deployment's `/exec` URL.

Set in the site's environment:

```
SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/..../exec
SHEETS_WEBHOOK_TOKEN=the-same-string-as-SHARED_TOKEN
```

The script creates one tab per lead type (`leads-workshop`) and writes a header row on
first use. Adding a field to the form later adds a column; existing columns keep their place.

**Re-deploying:** editing the script does not change what is live. Use
**Deploy → Manage deployments → edit → New version** to publish a change, or the URL will
keep serving the old code.

### Email to the owner from the same script

`docs/leads-webhook.gs` also emails the script owner's Gmail after every saved row
(`notifyOwner`). It needs no extra service and no environment variable.

- `NOTIFY_EMAIL` at the top of the script: leave empty to mail the account that owns the
  script, or set one or more comma-separated addresses. `NOTIFY = false` switches it off.
- After pasting a version of the script that has this, select **`authorizeMail`** in the
  editor's function dropdown and click **Run** once. Google then asks for the "send email"
  permission and sends a test mail. Then publish a **New version** of the deployment.
- The mail is sent after the row is saved and inside its own `try`, so a mail failure never
  loses or fails a lead. The web app's reply includes `"mailed": true` or `false`.
- It uses the owner's Gmail sending quota (roughly 100 recipients a day on a free account).
- Reply-To is set to the email the visitor typed, so replying answers them directly.

Resend (below) is the alternative for mail from your own domain. Use one or the other, or
both.

## 2. Email notification (Resend)

1. Create an account at [resend.com](https://resend.com) and add an API key.
2. Verify the sending domain under **Domains**. Until a domain is verified, Resend only
   delivers to the address that owns the account, so a notification to anyone else is
   silently dropped.
3. Set:

```
RESEND_API_KEY=re_...
LEAD_NOTIFY_EMAIL=someone@yourdomain.com
LEAD_FROM_EMAIL="Vidyam deAi Website <website@yourdomain.com>"
```

`LEAD_NOTIFY_EMAIL` accepts a comma-separated list.

## 3. Local setup

Copy `.env.example` to `.env.local` and fill it in. `.env.local` is gitignored — never
commit a real key. Restart `npm run dev` after changing it; env vars are read at boot.

Check it end to end by submitting the form at `/book-workshop`, then confirm a row appears
in the sheet and the email arrives.

## 4. Vercel

Add the same four variables under **Settings → Environment Variables**, for the
environments you want them in. Note that `VERCEL_ENV` also controls `<Placeholder>`:
unconfirmed values show as dashed `TBD` chips everywhere except a **production**
deployment, where they render their fallback instead.

## Troubleshooting

| Symptom | Cause |
|---|---|
| Form says "something went wrong", logs show `NO DESTINATION CONFIGURED` | No env vars set in that environment. |
| Logs show `Sheets rejected` | `SHEETS_WEBHOOK_TOKEN` does not match `SHARED_TOKEN`, or the deployment is serving an older version of the script. |
| Logs show `Sheets HTTP 302` | The deployment's access is not set to "Anyone", so Google is redirecting to a login page. |
| No row, no error | The script was edited but not re-deployed as a new version. |
| Email never arrives | Sending domain not verified in Resend, or `LEAD_FROM_EMAIL` uses a domain that is not yours. |

## Still missing

- **Turnstile.** `CLAUDE.md` lists it in the stack, but nothing in the code references it.
  The only bot defence on the form is the honeypot field. A public form with no CAPTCHA
  will eventually collect spam.
- **No retry or dead-letter.** If every destination fails, the lead is lost once the
  visitor gives up. A durable queue would be the fix if volume ever justifies it.
