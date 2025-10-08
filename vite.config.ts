import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "./",
  plugins: [react(), componentTagger()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
}));
