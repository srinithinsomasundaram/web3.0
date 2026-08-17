import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIST = join(__dirname, "dist");
const PORT = process.env.PORT || 8080;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".json": "application/json",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".webp": "image/webp",
};

async function handleSendEmail(req, res) {
  let body = "";
  for await (const chunk of req) body += chunk;

  const { subject, replyTo, text, to, attachments } = JSON.parse(body);

  const apiKey =
    process.env.SMTP_PASS ||
    atob("cmVfOFlmZlB5OVlfOGNqOENiNUQ0ZXBjRGtoMlBkS3VqMjJQ");
  const recipient = to || process.env.SMTP_TO || "srinithinoffl@gmail.com";

  const formattedAttachments = attachments?.map((att) => ({
    filename: att.filename,
    content: att.content,
  }));

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Yesp Corporation <onboarding@resend.dev>",
      to: [recipient],
      reply_to: replyTo,
      subject,
      text,
      ...(formattedAttachments?.length ? { attachments: formattedAttachments } : {}),
    }),
  });

  const resData = await resendRes.json();

  if (resendRes.ok) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true, id: resData.id }));
  } else {
    res.writeHead(502, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: false, error: `Resend error: ${JSON.stringify(resData)}` }));
  }
}

const server = createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/api/send-email") {
    try {
      await handleSendEmail(req, res);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: false, error: err?.message ?? "Internal error" }));
    }
    return;
  }

  // Serve static files from dist/
  const urlPath = req.url.split("?")[0];
  let filePath = join(DIST, urlPath);

  if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
    filePath = join(DIST, "index.html");
  }

  const contentType = MIME[extname(filePath)] ?? "application/octet-stream";
  res.writeHead(200, { "Content-Type": contentType });
  createReadStream(filePath).pipe(res);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
