import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["lib-imports-bar-using-main.ts"],
  format: "esm",
  dts: { resolve: true },
  clean: true,
});
