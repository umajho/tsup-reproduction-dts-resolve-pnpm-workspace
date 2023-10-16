import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["lib-imports-foo.ts"],
  format: "esm",
  dts: { resolve: true },
  clean: true,
});
