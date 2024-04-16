import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Because our host is on a different domain
    proxy: {
      "/cloud": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
