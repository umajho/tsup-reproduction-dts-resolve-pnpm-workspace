import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["lib-imports-bar.ts"],
  format: "esm",
  dts: { resolve: true },
  clean: true,
});
