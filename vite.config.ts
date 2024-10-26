import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/au-cv",
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
