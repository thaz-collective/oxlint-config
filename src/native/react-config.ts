import { defineConfig } from 'oxlint';

/**
 * Correctness Rules for React - Error By Default
 */
export const reactCorrectnessConfig = defineConfig({
  plugins: ['react', 'react-perf'],
  rules: {
    // 'react/exhaustive-deps': 'off',
    // 'react/forward-ref-uses-ref': 'off',
    // 'react/jsx-key': 'off',
    // 'react/jsx-no-duplicate-props': 'off',
    // 'react/jsx-no-undef': 'off',
    // 'react/jsx-props-no-spread-multi': 'off',
    'react/no-children-prop': 'off',
    // 'react/no-danger-with-children': 'off',
    // 'react/no-did-mount-set-state': 'off',
    // 'react/no-did-update-set-state': 'off',
    // 'react/no-direct-mutation-state': 'off',
    // 'react/no-find-dom-node': 'off',
    // 'react/no-is-mounted': 'off',
    // 'react/no-render-return-value': 'off',
    // 'react/no-string-refs': 'off',
    // 'react/no-this-in-sfc': 'off',
    // 'react/no-unsafe': 'off',
    // 'react/no-will-update-set-state': 'off',
    // 'react/void-dom-elements-no-children': 'off',
  },
});

/**
 * Nursery Rules for React - Off By Default
 */
export const reactNurseryConfig = defineConfig({
  plugins: ['react', 'react-perf'],
  rules: {
    // 'react/react-compiler': 'off',
    // 'react/require-render-return': 'error',
  },
});

/**
 * Pedantic Rules for React - Off By Default
 */
export const reactPedanticConfig = defineConfig({
  plugins: ['react', 'react-perf'],
  rules: {
    'react/checked-requires-onchange-or-readonly': 'error',
    // 'react/display-name': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'react/no-unescaped-entities': 'error',
    'react/rules-of-hooks': 'error',
  },
});

/**
 * Perf Rules for React - Error By Default
 */
export const reactPerfConfig = defineConfig({
  plugins: ['react', 'react-perf'],
  rules: {
    // 'react/jsx-no-constructed-context-values': 'off',
    // 'react/no-array-index-key': 'off',
    // 'react/no-object-type-as-default-prop': 'off',
    'react-perf/jsx-no-jsx-as-prop': 'off',
    'react-perf/jsx-no-new-array-as-prop': 'off',
    'react-perf/jsx-no-new-function-as-prop': 'off',
    'react-perf/jsx-no-new-object-as-prop': 'off',
  },
});

/**
 * Restriction Rules for React - Off By Default
 */
export const reactRestrictionConfig = defineConfig({
  plugins: ['react', 'react-perf'],
  rules: {
    'react/button-has-type': 'error',
    // 'react/forbid-component-props': 'error',
    // 'react/forbid-dom-props': 'error',
    // 'react/forbid-elements': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-no-literals': 'error',
    'react/no-clone-element': 'error',
    'react/no-danger': 'error',
    // 'react/no-multi-comp': 'error',
    'react/no-react-children': 'error',
    'react/no-unknown-property': 'error',
    'react/only-export-components': [
      'error',
      {
        customHOCs: ['createFileRoute', 'createRootRouteWithContext', 'createRootRoute'],
      },
    ],
    'react/prefer-function-component': 'error',
  },
});

/**
 * Style Rules for React - Off By Default
 */
export const reactStyleConfig = defineConfig({
  plugins: ['react', 'react-perf'],
  rules: {
    'react/hook-use-state': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        children: 'always',
        propElementValues: 'always',
        props: 'ignore',
      },
    ],
    'react/jsx-fragments': ['error', 'syntax'],
    // 'react/jsx-handler-names': 'error',
    // 'react/jsx-max-depth': 'error',
    'react/jsx-pascal-case': 'error',
    // 'react/jsx-props-no-spreading': 'error',
    // 'react/no-redundant-should-component-update': 'error',
    // 'react/no-set-state': 'error',
    // 'react/prefer-es6-class': 'error',
    'react/self-closing-comp': 'error',
    // 'react/state-in-constructor': 'error',
  },
});

/**
 * Suspicious Rules for React - Error By Default
 */
export const reactSuspiciousConfig = defineConfig({
  plugins: ['react', 'react-perf'],
  rules: {
    // 'react/iframe-missing-sandbox': 'off',
    'react/jsx-no-comment-textnodes': 'off',
    // 'react/jsx-no-script-url': 'off',
    // 'react/no-namespace': 'off',
    // 'react/no-unstable-nested-components': 'off',
    'react/react-in-jsx-scope': 'off',
    // 'react/style-prop-object': 'off',
  },
});

/**
 * Rules for React
 */
export const reactConfig = defineConfig({
  plugins: ['react', 'react-perf'],
  rules: {
    ...reactCorrectnessConfig.rules,
    ...reactPedanticConfig.rules,
    ...reactPerfConfig.rules,
    ...reactRestrictionConfig.rules,
    ...reactStyleConfig.rules,
    ...reactSuspiciousConfig.rules,
  },
});
