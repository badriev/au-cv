import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === "PROD" ? "/au-cv" : "/",
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  };
});
