import { defineConfig } from 'oxlint';

import { baseConfig } from './base-config';
import { jsPluginReactHooksExtraConfig } from './js-plugin/js-plugin-react-hooks-extra';
import { jsPluginReactNamingConventionConfig } from './js-plugin/js-plugin-react-naming-convention';
import { jsPluginReactWebAPIConfig } from './js-plugin/js-plugin-react-web-api';
import { jsPluginTanStackQueryConfig } from './js-plugin/js-plugin-tanstack-query';
import { jsPluginTanStackRouterConfig } from './js-plugin/js-plugin-tanstack-router';
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
import { testFileConfig } from './overrides/test-file-config';

export const fullConfig = defineConfig({
  ...baseConfig,
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
  jsPlugins: [
    ...jsPluginReactHooksExtraConfig.jsPlugins,
    ...jsPluginReactNamingConventionConfig.jsPlugins,
    ...jsPluginReactWebAPIConfig.jsPlugins,
    ...jsPluginTanStackQueryConfig.jsPlugins,
    ...jsPluginTanStackRouterConfig.jsPlugins,
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

    ...jsPluginReactHooksExtraConfig.rules,
    ...jsPluginReactNamingConventionConfig.rules,
    ...jsPluginReactWebAPIConfig.rules,
    ...jsPluginTanStackQueryConfig.rules,
    ...jsPluginTanStackRouterConfig.rules,
  },
  overrides: [...configFileConfig.overrides, ...libraryCodeConfig.overrides, ...testFileConfig.overrides],
});
