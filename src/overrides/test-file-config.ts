import { defineConfig } from 'oxlint';

import { vitestConfig } from '#src/native/vitest-config';

export const testFileConfigRules = defineConfig({
  rules: {
    ...vitestConfig.rules,
    'import/no-default-export': 'off',
    'promise/avoid-new': 'off',
    'typescript/no-unsafe-argument': 'off',
    'typescript/no-unsafe-assignment': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/no-useless-undefined': 'off',
  },
});

export const testFileConfig = defineConfig({
  overrides: [
    {
      plugins: vitestConfig.plugins,

      files: ['**/test/**/*.test.{ts,tsx}', '**/test/**/*.test-d.ts'],

      rules: testFileConfigRules.rules,
    },
  ],
});
