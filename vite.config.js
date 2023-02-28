import { resolve } from "path";
import { defineConfig } from "vite";
import { createMpaPlugin, createPages } from "vite-plugin-virtual-mpa";

const base = ""; // You can change whatever you want

const pages = createPages([
  {
    name: "portfolio",
    filename: "portfolio/portfolio.html",
    entry: "/src/pages/portfolio/portfolio.js",
  },
  {
    name: "info",
    filename: "info/info.html",
    entry: "/src/pages/info/info.js",
  },
  {
    name: "realizacja",
    filename: "realizacja/realizacja.html",
    entry: "/src/pages/realizacja/realizacja.js",
  },
]);

export default defineConfig({
  base,
  build: {
    sourcemap: true,
  },
  plugins: [
    createMpaPlugin({
      /**
       * You can write directly or use `createPages` function independently outside and then pass it to this field.
       * Both of the above can enjoy type hints.
       */
      pages,
      /**
       * Use html minimization feature at build time.
       */
      // htmlMinify: true,
      /**
       * Customize the history fallback rewrite rules for `dev server`.
       * If you config your pages as above, this rewrite rules will be automatically generated.
       * Otherwise you should manually write it, which will overwrite the default.
       */
      rewrites: [],
      /**
       * Customize the history fallback rewrite rules for `preview server`.
       * This option is almost the same with `rewrites`.
       */
      previewRewrites: [
        // If there's no index.html, you need to manually set rules for history fallback like:
        { from: /.*/, to: "/home.html" },
      ],
      /**
       * Sometimes you might want to reload `pages` config or restart ViteDevServer when
       * there are some files added, removed, changed and so on. You can set `watchOptions` to
       * customize your own logic.
       *
       * The `include` and `exclude` based on `Rollup.createFilter`
       *
       */
      watchOptions: {
        events: ["add", "unlink", "change"],
        include: ["**/pages/**", "**/infos/**"],
        handler: (ctx) => {
          console.log(ctx.type, ctx.file);
          // ctx.reloadPages();
        },
      },
    }),
  ],
});
