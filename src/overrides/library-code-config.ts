import { defineConfig } from 'oxlint';

export const libraryCodeConfigRules = defineConfig({
  rules: {
    // In library code we may need default exports for other libraries
    'import/no-default-export': 'off',

    // In library code we need type assertions
    'typescript/consistent-type-assertions': 'off',

    // In library code we need to disable this as there has to be barrel export points.
    'oxc/no-barrel-file': 'off',

    // In library code we need to return undefined for certain cases.
    'unicorn/no-useless-undefined': 'off',

    // In library code there may be private methods marked with underscore outside our control (valibot)
    'eslint/no-underscore-dangle': 'off',
  },
});

export const libraryCodeConfig = defineConfig({
  overrides: [
    {
      files: ['**/packages/**/src/**/*.{ts,tsx}', '**/tooling/**/src/**/*.{ts,tsx}'],

      rules: libraryCodeConfigRules.rules,
    },
  ],
});
