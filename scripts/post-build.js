import fs from "node:fs";
import path from "node:path";

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

  const assetsDir = path.join("dist", "assets");
  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    const mainJs = files.find((f) => /^index-.*\.js$/.test(f));
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
  </head>
  <body>
    <div id="root"></div>
    ${mainJs ? `<script type="module" src="/assets/${mainJs}"></script>` : ""}
  </body>
</html>`;

    fs.writeFileSync("dist/index.html", htmlContent);
    fs.writeFileSync("dist/client/index.html", htmlContent);
    fs.writeFileSync(path.join(src, "index.html"), htmlContent);
    console.log("Successfully generated static index.html with JS bundle:", mainJs, "and CSS bundle:", mainCss);
  }
}
