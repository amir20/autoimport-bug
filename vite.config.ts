import path from "path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import Pages from "vite-plugin-pages";
import Icons from "unplugin-icons/vite";

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "assets")}/`,
    },
  },
  base: "/",
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
    Icons({
      autoInstall: true,
    }),
    Pages({
      dirs: "assets/pages",
      importMode: "sync",
    }),
    AutoImport({
      imports: ["vue", "vue-router", "vue-i18n", "vue/macros", "pinia", "@vueuse/head", "@vueuse/core"],
      dts: "assets/auto-imports.d.ts",
      dirs: ["assets/composables"],
      vueTemplate: true,
    }),
  ],
}));
