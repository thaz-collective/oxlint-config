import { defineConfig } from 'oxlint';

export const jsPluginTanStackRouterConfig = defineConfig({
  jsPlugins: [
    {
      name: 'js-plugin-tanstack-router',
      specifier: '@tanstack/eslint-plugin-router',
    },
  ],
  rules: {
    'js-plugin-tanstack-router/create-route-property-order': 'error',
  },
});
