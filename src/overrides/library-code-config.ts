import { defineConfig } from 'oxlint';

import { baseConfig } from '#src/base-config';

export const libraryCodeConfig = defineConfig({
  ...baseConfig,
  overrides: [
    {
      files: ['**/packages/**/src/**/*.{ts,tsx}', '**/tooling/**/src/**/*.{ts,tsx}'],

      rules: {
        // In library code we need type assertions
        'typescript/consistent-type-assertions': 'off',

        // In library code we need to disable this as there has to be barrel export points.
        'oxc/no-barrel-file': 'off',

        // In library code we need to return undefined for certain cases.
        'unicorn/no-useless-undefined': 'off',

        // In library code there may be private methods marked with underscore outside our control (valibot)
        'eslint/no-underscore-dangle': 'off',
      },
    },
  ],
});
