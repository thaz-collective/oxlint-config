import { defineConfig } from 'oxlint';

export const routesFileConfig = defineConfig({
  overrides: [
    {
      files: ['**/src/routes/**/$*.tsx'],

      rules: {
        'unicorn/filename-case': 'off',
      },
    },
  ],
});
