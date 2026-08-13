import fs from "node:fs";
import http from "node:http";
import path from "node:path";

const port = Number(process.env.PORT || process.env.SERVER_PORT || 8080);
const host = "0.0.0.0";

function startStaticServer() {
  const distDir = fs.existsSync("dist") ? "dist" : "public";
  console.log(`Starting static server from ${distDir} on ${host}:${port}...`);

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
    if (reqPath === "/") reqPath = "/index.html";

    let filePath = path.join(distDir, reqPath);

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
}

if (fs.existsSync(".output/server/index.mjs")) {
  console.log(`Starting Nitro server on ${host}:${port}...`);
  process.env.PORT = String(port);
  process.env.HOST = host;
  import(path.resolve(".output/server/index.mjs")).catch((err) => {
    console.error("Failed to start Nitro server, falling back to static server:", err);
    startStaticServer();
  });
} else {
  startStaticServer();
}
