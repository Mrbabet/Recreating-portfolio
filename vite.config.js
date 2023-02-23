import { resolve } from "path";
import { defineConfig } from "vite";
import mpa from "vite-plugin-mpa";

const root = resolve(__dirname, "");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  plugins: [],
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        info: resolve(root, "info.html"),
        portfolio: resolve(root, "portfolio.html"),
        realizacja: resolve(root, "realizacja.html"),
      },
    },
  },
});
