import { copyFileSync, existsSync } from "node:fs";

if (!existsSync("dist/index.html")) {
  throw new Error("Static build did not generate dist/index.html");
}

copyFileSync("dist/index.html", "dist/404.html");
