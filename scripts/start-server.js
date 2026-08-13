import fs from "node:fs";
import http from "node:http";
import path from "node:path";

const port = Number(process.env.PORT || process.env.SERVER_PORT || 8080);
const host = "0.0.0.0";

const distDir = fs.existsSync("dist") ? "dist" : "public";
console.log(`Starting web server from ${distDir} on ${host}:${port}...`);

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

  // Dedicated Health Check endpoint for Nimbuz / Load Balancer probes
  if (["/health", "/healthz", "/ping", "/_health", "/api/health"].includes(reqPath)) {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("OK");
    return;
  }

  if (reqPath === "/") reqPath = "/index.html";

  let filePath = path.join(distDir, reqPath);

  // Single Page Application fallback for route paths (/about, /contact, /careers, etc.)
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, "index.html");
  }

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || "application/octet-stream";

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
  console.log(`Server listening on http://${host}:${port}`);
});
