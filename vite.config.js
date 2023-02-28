import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        portfolio: resolve(__dirname, "pages/portfolio/index.html"),
        info: resolve(__dirname, "pages/info/index.html"),
        realzacja: resolve(__dirname, "pages/realizacja/index.html"),
      },
    },
  },
});
