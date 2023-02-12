import path from "path";

export default {
  root: path.resolve(__dirname, ""),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        portfolio: path.resolve(__dirname, "portfolio.html"),
        realizacja: path.resolve(__dirname, "realizacja.html"),
      },
    },
  },
};
