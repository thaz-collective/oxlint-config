import { defineConfig } from 'oxlint';

export const jsPluginReactHooksExtraConfig = defineConfig({
  jsPlugins: [
    {
      name: 'js-plugin-react-hooks-extra',
      specifier: 'eslint-plugin-react-hooks-extra',
    },
  ],
  rules: {
    'js-plugin-react-hooks-extra/no-direct-set-state-in-use-effect': 'warn',
  },
});
