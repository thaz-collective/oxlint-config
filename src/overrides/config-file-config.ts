import { defineConfig } from 'oxlint';

import { baseConfig } from '#src/base-config';

export const configFileConfig = defineConfig({
  ...baseConfig,
  overrides: [
    {
      files: ['**/*.config.ts'],

      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
});
