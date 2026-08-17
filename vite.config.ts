import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import type { Connect, Plugin } from "vite";
import type { IncomingMessage, ServerResponse } from "node:http";

function internalNotificationHtml(p: {
  name: string; role: string; email: string;
  phone: string; message: string; resumeName: string; timestamp: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
  <tr>
    <td style="background:#09090b;padding:28px 36px;">
      <p style="margin:0;color:#a1a1aa;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">Yesp Corporation · Careers · Internal</p>
      <p style="margin:8px 0 0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.3px;">New Candidate Application</p>
    </td>
  </tr>
  <tr>
    <td style="padding:36px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;margin-bottom:28px;">
        <tr><td style="padding:20px 24px;">
          <p style="margin:0 0 16px;color:#09090b;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">Candidate Details</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:5px 0;color:#71717a;font-size:12px;width:130px;vertical-align:top;">Position</td>
              <td style="padding:5px 0;color:#09090b;font-size:13px;font-weight:600;">${p.role}</td>
            </tr>
            <tr>
              <td style="padding:5px 0;color:#71717a;font-size:12px;vertical-align:top;">Full Name</td>
              <td style="padding:5px 0;color:#09090b;font-size:13px;font-weight:600;">${p.name}</td>
            </tr>
            <tr>
              <td style="padding:5px 0;color:#71717a;font-size:12px;vertical-align:top;">Email</td>
              <td style="padding:5px 0;color:#09090b;font-size:13px;">
                <a href="mailto:${p.email}" style="color:#2563eb;text-decoration:none;">${p.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:5px 0;color:#71717a;font-size:12px;vertical-align:top;">Phone</td>
              <td style="padding:5px 0;color:#09090b;font-size:13px;">${p.phone}</td>
            </tr>
            <tr>
              <td style="padding:5px 0;color:#71717a;font-size:12px;vertical-align:top;">Work Mode</td>
              <td style="padding:5px 0;color:#09090b;font-size:13px;">100% Remote / Virtual</td>
            </tr>
            <tr>
              <td style="padding:5px 0;color:#71717a;font-size:12px;vertical-align:top;">Resume</td>
              <td style="padding:5px 0;color:#09090b;font-size:13px;">${p.resumeName}</td>
            </tr>
            <tr>
              <td style="padding:5px 0;color:#71717a;font-size:12px;vertical-align:top;">Submitted</td>
              <td style="padding:5px 0;color:#09090b;font-size:13px;">${p.timestamp}</td>
            </tr>
          </table>
        </td></tr>
      </table>
      <p style="margin:0 0 8px;color:#71717a;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Cover Note</p>
      <div style="background:#f8fafc;border-left:3px solid #09090b;border-radius:0 6px 6px 0;padding:16px 20px;margin-bottom:28px;">
        <p style="margin:0;color:#3f3f46;font-size:13px;line-height:1.75;white-space:pre-wrap;">${p.message}</p>
      </div>
      <a href="mailto:${p.email}?subject=Re%3A%20${encodeURIComponent(p.role)}%20Application%20%E2%80%94%20Yesp%20Corporation"
         style="display:inline-block;background:#09090b;color:#ffffff;text-decoration:none;font-size:13px;font-weight:600;padding:12px 24px;border-radius:6px;letter-spacing:0.2px;">
        Reply to Candidate
      </a>
    </td>
  </tr>
  <tr>
    <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 36px;">
      <p style="margin:0;color:#94a3b8;font-size:11px;line-height:1.6;">
        Yesp Corporation &nbsp;·&nbsp; Internal Careers Notification &nbsp;·&nbsp; ${p.timestamp}
      </p>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

function applicantConfirmationHtml(p: { name: string; role: string }) {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
  <tr>
    <td style="background:#09090b;padding:28px 36px;">
      <p style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.3px;">Yesp Corporation</p>
      <p style="margin:6px 0 0;color:#71717a;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;">Talent Acquisition</p>
    </td>
  </tr>
  <tr>
    <td style="padding:36px;">
      <p style="margin:0 0 20px;color:#09090b;font-size:15px;line-height:1.6;">Dear <strong>${p.name}</strong>,</p>
      <p style="margin:0 0 20px;color:#3f3f46;font-size:14px;line-height:1.75;">
        Thank you for applying to Yesp Corporation. We have successfully received your application
        and your candidate profile is now under active review by our Talent Acquisition Team.
      </p>
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;margin:24px 0;">
        <tr><td style="padding:20px 24px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:5px 0;color:#94a3b8;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Position Applied</td>
            </tr>
            <tr>
              <td style="padding:2px 0 14px;color:#09090b;font-size:14px;font-weight:700;">${p.role}</td>
            </tr>
            <tr>
              <td style="padding:5px 0;color:#94a3b8;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Work Mode</td>
            </tr>
            <tr>
              <td style="padding:2px 0 14px;color:#09090b;font-size:14px;font-weight:600;">100% Remote / Virtual</td>
            </tr>
            <tr>
              <td style="padding:5px 0;color:#94a3b8;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Application Status</td>
            </tr>
            <tr>
              <td style="padding:2px 0;color:#16a34a;font-size:14px;font-weight:600;">Received &amp; Under Review</td>
            </tr>
          </table>
        </td></tr>
      </table>
      <p style="margin:0 0 16px;color:#3f3f46;font-size:14px;line-height:1.75;">
        Our team reviews every application thoroughly. Should your background and experience align
        with our current requirements, a member of our Talent Acquisition Team will contact you
        directly to arrange an initial conversation.
      </p>
      <p style="margin:0 0 32px;color:#3f3f46;font-size:14px;line-height:1.75;">
        We value your interest in joining Yesp Corporation and will be in touch.
      </p>
      <p style="margin:0;color:#3f3f46;font-size:14px;line-height:1.8;">
        Sincerely,<br>
        <strong style="color:#09090b;font-size:14px;">Talent Acquisition Team</strong><br>
        <span style="color:#71717a;font-size:13px;">Yesp Corporation</span>
      </p>
    </td>
  </tr>
  <tr>
    <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 36px;">
      <p style="margin:0;color:#94a3b8;font-size:11px;line-height:1.6;">
        <strong style="color:#71717a;">Yesp Corporation</strong> &nbsp;·&nbsp; 100% Remote Operations &nbsp;·&nbsp; Make Better Happen.<br>
        This is an automated confirmation. Please do not reply to this message.
      </p>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

async function resendSend(apiKey: string, payload: object) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await res.json()) as { id?: string; name?: string; message?: string };
  return { ok: res.ok, status: res.status, data };
}

async function sendEmailHandler(req: IncomingMessage, res: ServerResponse) {
  let body = "";
  for await (const chunk of req) body += chunk;

  const {
    replyTo,
    to,
    attachments,
    applicantName,
    applicantRole,
    applicantPhone,
    applicantMessage,
    resumeName,
  } = JSON.parse(body) as {
    replyTo: string; to?: string; attachments?: { filename: string; content: string }[];
    applicantName?: string; applicantRole?: string; applicantPhone?: string;
    applicantMessage?: string; resumeName?: string;
  };

  const apiKey =
    process.env["SMTP_PASS"] ||
    atob("cmVfOFlmZlB5OVlfOGNqOENiNUQ0ZXBjRGtoMlBkS3VqMjJQ");
  const owner = to || process.env["SMTP_TO"] || "srinithinoffl@gmail.com";
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const name = applicantName ?? "Candidate";
  const role = applicantRole ?? "General Application";
  const phone = applicantPhone ?? "Not provided";
  const message = applicantMessage ?? "";
  const resume = resumeName ?? "No file attached";

  const formattedAttachments = (attachments ?? []).map((a) => ({
    filename: a.filename,
    content: a.content,
  }));

  // 1. Send internal notification to owner
  const notifResult = await resendSend(apiKey, {
    from: "Yesp Careers <onboarding@resend.dev>",
    to: [owner],
    reply_to: replyTo,
    subject: `[YESP CAREERS] New Application — ${name} · ${role}`,
    html: internalNotificationHtml({ name, role, email: replyTo, phone, message, resumeName: resume, timestamp }),
    ...(formattedAttachments.length ? { attachments: formattedAttachments } : {}),
  });

  if (!notifResult.ok) {
    console.error("[send-email] notification failed:", notifResult.status, JSON.stringify(notifResult.data));
    res.writeHead(502, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: false, error: `Email service error (${notifResult.status}): ${JSON.stringify(notifResult.data)}` }));
    return;
  }

  console.log("[send-email] notification sent →", notifResult.data.id, "→", owner);

  // 2. Send confirmation to applicant (best-effort — never fails the main request)
  resendSend(apiKey, {
    from: "Yesp Corporation <onboarding@resend.dev>",
    to: [replyTo],
    subject: `Application Received — ${role} | Yesp Corporation`,
    html: applicantConfirmationHtml({ name, role }),
  })
    .then((r) => {
      if (r.ok) console.log("[send-email] confirmation sent →", r.data.id, "→", replyTo);
      else console.warn("[send-email] confirmation skipped (domain restriction):", r.status, JSON.stringify(r.data));
    })
    .catch((e) => console.warn("[send-email] confirmation error:", e?.message));

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: true, id: notifResult.data.id }));
}

function sendEmailPlugin(): Plugin {
  const middleware: Connect.HandleFunction = async (req, res, next) => {
    if (req.method === "POST" && req.url === "/api/send-email") {
      try {
        await sendEmailHandler(req, res);
      } catch (err: unknown) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: false, error: (err as Error)?.message ?? "Internal error" }));
      }
      return;
    }
    next();
  };

  return {
    name: "send-email-api",
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), sendEmailPlugin()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": path.resolve("src"),
      "node:net": path.resolve("src/lib/empty-shim.ts"),
      "node:tls": path.resolve("src/lib/empty-shim.ts"),
      net: path.resolve("src/lib/empty-shim.ts"),
      tls: path.resolve("src/lib/empty-shim.ts"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: process.env["PORT"] ? Number(process.env["PORT"]) : 8080,
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    port: process.env["PORT"] ? Number(process.env["PORT"]) : 8080,
    allowedHosts: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
