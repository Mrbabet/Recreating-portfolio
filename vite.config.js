// import { resolve } from "path";
// import { defineConfig } from "vite";
// const root = resolve(__dirname, "");
// const outDir = resolve(__dirname, "dist");
// export default defineConfig({
//   build: {
//     emptyOutDir: true,
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, "index.html"),
//         portfolio: resolve(__dirname, "/pages/portfolio/index.html"),
//         info: resolve(__dirname, "/pages/info/index.html"),
//         realzacja: resolve(__dirname, "/pages/realizacja/index.html"),
//       },
//     },
//   },
// });
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        portfolio: resolve(__dirname, "portfolio/index.html"),
        info: resolve(__dirname, "info/index.html"),
        realizacja1: resolve(
          __dirname,
          "portfolio/realizacja/Construction-Company-Web-Concept-Design-2023/index.html"
        ),
        realizacja2: resolve(
          __dirname,
          "portfolio/realizacja/PRS-Bud-Bączek-Logo-Design-2023/index.html"
        ),
        realizacja3: resolve(
          __dirname,
          "portfolio/realizacja/Tulle-Girl-2022/index.html"
        ),
        realizacja4: resolve(
          __dirname,
          "portfolio/realizacja/Spring-Mark-2023/index.html"
        ),
        realizacja5: resolve(
          __dirname,
          "portfolio/realizacja/Answer-Graphic-Design-Masters-2023/index.html"
        ),
        realizacja6: resolve(
          __dirname,
          "portfolio/realizacja/Logos&Marks-2021-2022/index.html"
        ),
        realizacja7: resolve(
          __dirname,
          "portfolio/realizacja/Kamsa-Design-Logo-Design-2021/index.html"
        ),
        realizacja8: resolve(
          __dirname,
          "portfolio/realizacja/Freckles-2022/index.html"
        ),
        realizacja9: resolve(
          __dirname,
          "portfolio/realizacja/36-Days-of-Type-2021/index.html"
        ),
        realizacja10: resolve(
          __dirname,
          "portfolio/realizacja/Valentine's-Day-Illustration-2023/index.html"
        ),
        realizacja11: resolve(
          __dirname,
          "portfolio/realizacja/Green-Lady-in-Red-2022/index.html"
        ),
        realizacja12: resolve(
          __dirname,
          "portfolio/realizacja/Kooperatywa-Światła-Visual-Identity-Concept-Design-2022/index.html"
        ),
      },
    },
  },
});
