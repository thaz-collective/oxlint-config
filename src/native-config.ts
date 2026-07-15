import { defineConfig } from 'oxlint';

import { baseConfig } from './base-config';
import { eslintConfig } from './native/eslint-config';
import { importConfig } from './native/import-config';
import { jsdocConfig } from './native/jsdoc-config';
import { jsxA11yConfig } from './native/jsx-a11y-config';
import { nodeConfig } from './native/node-config';
import { oxcConfig } from './native/oxc-config';
import { promiseConfig } from './native/promise-config';
import { reactConfig } from './native/react-config';
import { typeScriptConfig } from './native/typescript-config';
import { unicornConfig } from './native/unicorn-config';
import { configFileConfig } from './overrides/config-file-config';
import { libraryCodeConfig } from './overrides/library-code-config';
import { routesFileConfig } from './overrides/routes-file-config';
import { testFileConfig } from './overrides/test-file-config';

export const nativeConfig = defineConfig({
  ...baseConfig,
  ignorePatterns: ['**/route-tree.gen.ts', '**/.content-collections/**'],
  plugins: [
    ...eslintConfig.plugins,
    ...importConfig.plugins,
    ...jsdocConfig.plugins,
    ...jsxA11yConfig.plugins,
    ...nodeConfig.plugins,
    ...oxcConfig.plugins,
    ...promiseConfig.plugins,
    ...reactConfig.plugins,
    ...typeScriptConfig.plugins,
    ...unicornConfig.plugins,
  ],
  rules: {
    ...eslintConfig.rules,
    ...importConfig.rules,
    ...jsdocConfig.rules,
    ...jsxA11yConfig.rules,
    ...nodeConfig.rules,
    ...oxcConfig.rules,
    ...promiseConfig.rules,
    ...reactConfig.rules,
    ...typeScriptConfig.rules,
    ...unicornConfig.rules,
  },
  overrides: [
    ...configFileConfig.overrides,
    ...libraryCodeConfig.overrides,
    ...testFileConfig.overrides,
    ...routesFileConfig.overrides,
  ],
});
