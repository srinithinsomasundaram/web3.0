import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
    port: process.env.PORT ? Number(process.env.PORT) : 8080,
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 8080,
    allowedHosts: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
