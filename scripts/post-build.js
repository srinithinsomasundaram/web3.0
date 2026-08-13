import fs from "node:fs";
import path from "node:path";
import { build } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

async function run() {
  const src = fs.existsSync(".netlify/publish")
    ? ".netlify/publish"
    : fs.existsSync(".output/public")
    ? ".output/public"
    : "";

  if (src) {
    fs.mkdirSync("dist", { recursive: true });
    fs.mkdirSync("dist/client", { recursive: true });
    
    for (const item of fs.readdirSync(src)) {
      fs.cpSync(src + "/" + item, "dist/" + item, { recursive: true });
      fs.cpSync(src + "/" + item, "dist/client/" + item, { recursive: true });
    }

    console.log("Building SPA client entry (src/main.tsx)...");
    await build({
      configFile: false,
      define: {
        "process.env.NODE_ENV": JSON.stringify("production"),
        "process.env.TSS_ROUTER_BASEPATH": JSON.stringify(""),
        "process.env": {},
        "global": "window",
      },
      plugins: [tailwindcss(), tsconfigPaths({ projects: ["./tsconfig.json"] }), react()],
      build: {
        outDir: "dist/assets",
        emptyOutDir: false,
        lib: {
          entry: path.resolve("src/main.tsx"),
          formats: ["es"],
          fileName: () => "app-client.js",
        },
      },
    });

    const assetsDir = path.join("dist", "assets");
    if (fs.existsSync(assetsDir)) {
      const files = fs.readdirSync(assetsDir);
      const mainCss = files.find((f) => /^styles-.*\.css$/.test(f));

      const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Yesp Corporation — Global Enterprise Software, AI & Automation</title>
    <meta name="description" content="Yesp Corporation is a global enterprise technology company building custom software, applied AI agents, and intelligent workflow automation. Make Better Happen." />
    <link rel="icon" href="/favicon.png" type="image/png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap" />
    ${mainCss ? `<link rel="stylesheet" href="/assets/${mainCss}" />` : ""}
    <script>window.process = window.process || { env: { NODE_ENV: 'production' } };</script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/app-client.js"></script>
  </body>
</html>`;

      fs.writeFileSync("dist/index.html", htmlContent);
      fs.writeFileSync("dist/client/index.html", htmlContent);
      if (fs.existsSync("dist/client/assets")) {
        fs.cpSync("dist/assets/app-client.js", "dist/client/assets/app-client.js", { force: true });
      }
      if (fs.existsSync(src)) {
        fs.writeFileSync(path.join(src, "index.html"), htmlContent);
      }
      console.log("Successfully generated static index.html with SPA client bundle app-client.js!");
    }
  }
}

run().catch((err) => {
  console.error("Post-build error:", err);
  process.exit(1);
});
