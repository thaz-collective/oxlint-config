import { defineConfig } from 'oxlint';

import { jsPluginReactHooksExtraConfig } from './js-plugin/js-plugin-react-hooks-extra';
import { jsPluginReactNamingConventionConfig } from './js-plugin/js-plugin-react-naming-convention';
import { jsPluginReactWebAPIConfig } from './js-plugin/js-plugin-react-web-api';
import { jsPluginTanStackQueryConfig } from './js-plugin/js-plugin-tanstack-query';
import { jsPluginTanStackRouterConfig } from './js-plugin/js-plugin-tanstack-router';
import { nativeConfig } from './native-config';

export const jsPluginConfig = defineConfig({
  ...nativeConfig,
  jsPlugins: [
    ...jsPluginReactHooksExtraConfig.jsPlugins,
    ...jsPluginReactNamingConventionConfig.jsPlugins,
    ...jsPluginReactWebAPIConfig.jsPlugins,
    ...jsPluginTanStackQueryConfig.jsPlugins,
    ...jsPluginTanStackRouterConfig.jsPlugins,
  ],
  rules: {
    ...nativeConfig.rules,

    ...jsPluginReactHooksExtraConfig.rules,
    ...jsPluginReactNamingConventionConfig.rules,
    ...jsPluginReactWebAPIConfig.rules,
    ...jsPluginTanStackQueryConfig.rules,
    ...jsPluginTanStackRouterConfig.rules,
  },
});
