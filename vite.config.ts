import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { UserConfig } from "vite";

// https://vitejs.dev/config/

///<reference types='vitest'>

interface VitestConfig extends UserConfig {
  test?: {
    globals?: boolean;
    environment?: string;
    setupFiles?: string[];
  };
}

export default defineConfig({
  plugins: [react()],
  base: "/Todo_task",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
  resolve: {
    alias: {
      "@": "/src", // This sets the "@" alias to your source directory.
    },
  },
} as VitestConfig);
