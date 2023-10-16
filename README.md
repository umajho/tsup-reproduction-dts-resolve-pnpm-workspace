1. `pnpm i`
2. `cd packages/lib-to-be-built`
   - `pnpm run build-foo-dts-resolve` -> success
   - `pnpm run build-bar-dts-true` -> success (types in support-lib not
     resolved)
   - `pnpm run build-bar-dts-resolve` -> “DTS Build error” “Unexpected token”
   - `pnpm run build-bar-using-main-dts-resolve` -> success
