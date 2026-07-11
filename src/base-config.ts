import { defineConfig } from 'oxlint';

export const baseConfig = defineConfig({
  // https://oxc.rs/docs/guide/usage/linter/config.html#enable-groups-of-rules-with-categories
  // https://oxc.rs/docs/guide/usage/linter/config-file-reference.html#categories
  categories: {
    correctness: 'error',
    nursery: 'off',
    pedantic: 'off',
    perf: 'error',
    restriction: 'off',
    style: 'off',
    suspicious: 'error',
  },
  // https://oxc.rs/docs/guide/usage/linter/config-file-reference.html#env
  env: {
    browser: true,
    es2023: true,
    node: true,
  },
});
