import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "index.ts",
      name: "MyLitLib",
      fileName: "lit-card",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["lit"]
    }
  }
});