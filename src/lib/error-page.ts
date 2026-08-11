export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Yesp Corporation — Global Enterprise Technology</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.png" type="image/png" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #0b0f19; color: #f8fafc; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; background: #151c2c; border: 1px solid rgba(255,255,255,0.1); border-radius: 1.25rem; }
      h1 { font-size: 1.25rem; font-weight: 800; margin: 0 0 0.5rem; color: #ffffff; }
      p { color: #94a3b8; font-size: 0.875rem; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.6rem 1.25rem; border-radius: 9999px; font-size: 0.825rem; font-weight: 700; cursor: pointer; text-decoration: none; border: 1px solid transparent; transition: all 0.2s; }
      .primary { background: #38bdf8; color: #0b0f19; }
      .secondary { background: #1e293b; color: #f8fafc; border-color: rgba(255,255,255,0.1); }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>Yesp Corporation</h1>
      <p>Connecting to executive portal. Please refresh or navigate home.</p>
      <div class="actions">
        <button class="primary" onclick="window.location.reload()">Reload Page</button>
        <a class="secondary" href="/">Go to Homepage</a>
      </div>
    </div>
  </body>
</html>`;
}
