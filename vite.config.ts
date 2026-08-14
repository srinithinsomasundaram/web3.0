import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  plugins: [tailwindcss(), tsconfigPaths(), react()],
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "node:net": path.resolve("src/lib/empty-shim.ts"),
      "node:tls": path.resolve("src/lib/empty-shim.ts"),
      "net": path.resolve("src/lib/empty-shim.ts"),
      "tls": path.resolve("src/lib/empty-shim.ts"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
