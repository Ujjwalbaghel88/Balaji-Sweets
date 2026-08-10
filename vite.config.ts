import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: process.env["GITHUB_REPOSITORY"]
      ? `/${process.env["GITHUB_REPOSITORY"]?.split("/")[1] ?? ""}/`
      : "/",
    server: {
      host: "localhost",
      port: 5176,
      strictPort: true,
    },
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
