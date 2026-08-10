import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];

export default defineConfig({
  base: repository ? `/${repository}/` : "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: { outDir: "dist" },
});
