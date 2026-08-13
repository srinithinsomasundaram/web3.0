import fs from "node:fs";
import http from "node:http";
import path from "node:path";

const port = Number(process.env.PORT || process.env.SERVER_PORT || 8080);
const host = "0.0.0.0";

function resolveDistDir() {
  if (fs.existsSync("dist") && fs.existsSync("dist/index.html")) return "dist";
  if (fs.existsSync(".output/public") && fs.existsSync(".output/public/index.html")) return ".output/public";
  if (fs.existsSync("public")) return "public";
  return "dist";
}

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".xml": "text/xml",
  ".txt": "text/plain",
};

const server = http.createServer((req, res) => {
  let reqPath = (req.url || "/").split("?")[0];

  // 1. Health Check Probes for Nimbuz / Load Balancer probes
  if (["/health", "/healthz", "/ping", "/_health", "/api/health"].includes(reqPath)) {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("OK");
    return;
  }

  // 2. Same-Origin Email Proxy Endpoint
  if (req.method === "POST" && reqPath === "/api/send-email") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString("utf8");
    });
    req.on("end", async () => {
      try {
        const payload = JSON.parse(body || "{}");
        const fallbackKey = atob("cmVfOFlmZlB5OVlfOGNqOENiNUQ0ZXBjRGtoMlBkS3VqMjJQ");
        const pass = process.env.SMTP_PASS || fallbackKey;
        const recipient = payload.to || process.env.SMTP_TO || "srinithinoffl@gmail.com";
        const replyTo = payload.replyTo || payload.email;

        const formattedAttachments = payload.attachments?.map((att) => ({
          filename: att.filename,
          content: att.content,
        }));

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${pass}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Yesp Corporation <onboarding@resend.dev>",
            to: [recipient],
            reply_to: replyTo,
            subject: payload.subject,
            text: payload.text,
            ...(formattedAttachments ? { attachments: formattedAttachments } : {}),
          }),
        });

        const resendData = (await resendRes.json()) as any;
        if (resendRes.ok) {
          console.log(`[API Send Email] Dispatched via Resend API (ID: ${resendData?.id}) to ${recipient}`);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: true, id: resendData?.id }));
        } else {
          console.warn("[API Send Email] Resend API Warning:", resendData);
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ ok: false, error: resendData }));
        }
      } catch (err) {
        console.error("[API Send Email] Exception:", err);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: false, error: err instanceof Error ? err.message : String(err) }));
      }
    });
    return;
  }

  // 3. Static SPA File Serving
  const distDir = resolveDistDir();
  if (reqPath === "/") reqPath = "/index.html";

  let filePath = path.join(distDir, reqPath);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, "index.html");
  }

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || "application/octet-stream";

  if (req.method === "HEAD") {
    res.writeHead(200, { "Content-Type": contentType });
    res.end();
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

server.listen(port, host, () => {
  console.log(`Server successfully listening on http://${host}:${port}`);
});
