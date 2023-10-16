import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["lib-imports-bar.ts"],
  format: "esm",
  dts: true,
  clean: true,
});
