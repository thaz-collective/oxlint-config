import { defineConfig } from 'oxlint';

export const jsPluginTanStackQueryConfig = defineConfig({
  jsPlugins: [
    {
      name: 'js-plugin-tanstack-query',
      specifier: '@tanstack/eslint-plugin-query',
    },
  ],
  rules: {
    'js-plugin-tanstack-query/exhaustive-deps': 'error',
    'js-plugin-tanstack-query/no-rest-destructuring': 'error',
    'js-plugin-tanstack-query/stable-query-client': 'error',
    'js-plugin-tanstack-query/no-unstable-deps': 'error',
    'js-plugin-tanstack-query/infinite-query-property-order': 'error',
    'js-plugin-tanstack-query/no-void-query-fn': 'error',
    'js-plugin-tanstack-query/mutation-property-order': 'error',
  },
});
