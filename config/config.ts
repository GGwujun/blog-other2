// Config for dumi
import { defineConfig } from "dumi";
import { getBookNavs } from "../scripts/navs";

const isDev = process.env.NODE_ENV === "development";
const isVercel = process.env.IS_VERCEL;


export default defineConfig({
  ...(isDev
    ? {
        dynamicImport: {},
      }
    : {
        ssr: {},
      }),

  logo: "/logo.png",
  base: "/blog-other2",
  publicPath: "/blog-other2/",
  favicon: "/logo.png",
  mode: "site",
  title: "大师兄",
  locales: [["zh-CN", "中文"]],
  resolve: {
    includes: ["./src", "./ssrc"],
    previewLangs: [],
  },
  outputPath:'docs',
  navs: [...getBookNavs(process.env.PAGE)],
  polyfill: false,
  nodeModulesTransform: {
    type: "none",
  },
  exportStatic: {},
  analytics: isDev
    ? false
    : {
        ga: "UA-149864185-1",
      },
});