import {
  Foo,
  foo,
} from "@tsup-reproduction-dts-resolve-pnpm-workspace/support-lib/bar-that-imports-foo";

export const baz: Foo = foo;
