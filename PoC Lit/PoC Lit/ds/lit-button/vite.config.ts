import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "index.ts",
      name: "MyLitLib",
      fileName: "lit-button",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["lit"]
    }
  }
});