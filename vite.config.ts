import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Todo_task",
  resolve: {
    alias: {
      "@": "/src", // This sets the "@" alias to your source directory.
    },
  },
});
