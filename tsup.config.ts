import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'], // "iife", "cjs",
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
});
