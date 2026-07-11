import { defineConfig } from 'oxlint';

export const configFileConfig = defineConfig({
  overrides: [
    {
      files: ['**/*.config.ts'],

      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
});
