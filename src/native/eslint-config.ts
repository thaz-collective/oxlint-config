import { defineConfig } from 'oxlint';

import { baseConfig } from '#src/base-config';

/**
 * Correctness Rules for ESLint - Error By Default
 */
export const eslintCorrectnessConfig = defineConfig({
  ...baseConfig,
  plugins: ['eslint'],
  rules: {
    // 'eslint/constructor-super': 'off',
    // 'eslint/for-direction': 'off',
    // 'eslint/getter-return': 'off',
    // 'eslint/no-async-promise-executor': 'off',
    // 'eslint/no-caller': 'off',
    // 'eslint/no-class-assign': 'off',
    // 'eslint/no-compare-neg-zero': 'off',
    // 'eslint/no-cond-assign': 'off',
    // 'eslint/no-const-assign': 'off',
    // 'eslint/no-constant-binary-expression': 'off',
    // 'eslint/no-constant-condition': 'off',
    // 'eslint/no-control-regex': 'off',
    // 'eslint/no-debugger': 'off',
    // 'eslint/no-delete-var': 'off',
    // 'eslint/no-dupe-class-members': 'off',
    // 'eslint/no-dupe-else-if': 'off',
    // 'eslint/no-dupe-keys': 'off',
    // 'eslint/no-duplicate-case': 'off',
    // 'eslint/no-empty-character-class': 'off',
    // 'eslint/no-empty-pattern': 'off',
    // 'eslint/no-empty-static-block': 'off',
    // 'eslint/no-eval': 'off',
    // 'eslint/no-ex-assign': 'off',
    // 'eslint/no-extra-boolean-cast': 'off',
    // 'eslint/no-func-assign': 'off',
    // 'eslint/no-global-assign': 'off',
    // 'eslint/no-import-assign': 'off',
    // 'eslint/no-invalid-regexp': 'off',
    // 'eslint/no-irregular-whitespace': 'off',
    // 'eslint/no-iterator': 'off',
    // 'eslint/no-loss-of-precision': 'off',
    // 'eslint/no-misleading-character-class': 'off',
    // 'eslint/no-new-native-nonconstructor': 'off',
    // 'eslint/no-nonoctal-decimal-escape': 'off',
    // 'eslint/no-obj-calls': 'off',
    // 'eslint/no-self-assign': 'off',
    // 'eslint/no-setter-return': 'off',
    // 'eslint/no-shadow-restricted-names': 'off',
    // 'eslint/no-sparse-arrays': 'off',
    // 'eslint/no-this-before-super': 'off',
    // 'eslint/no-unreachable': 'off',
    // 'eslint/no-unsafe-finally': 'off',
    // 'eslint/no-unsafe-negation': 'off',
    // 'eslint/no-unsafe-optional-chaining': 'off',
    // 'eslint/no-unused-expressions': 'off',
    // 'eslint/no-unused-labels': 'off',
    // 'eslint/no-unused-private-class-members': 'off',
    // 'eslint/no-unused-vars': 'off',
    // 'eslint/no-useless-backreference': 'off',
    // 'eslint/no-useless-catch': 'off',
    // 'eslint/no-useless-escape': 'off',
    // 'eslint/no-useless-rename': 'off',
    // 'eslint/no-with': 'off',
    // 'eslint/require-yield': 'off',
    // 'eslint/use-isnan': 'off',
    // 'eslint/valid-typeof': 'off',
  },
});

/**
 * Nursery Rules for ESLint - Off By Default
 */
export const eslintNurseryConfig = defineConfig({
  ...baseConfig,
  plugins: ['eslint'],
  rules: {
    // 'eslint/no-restricted-exports': 'off',
    // 'eslint/no-undef': 'off',
    // 'eslint/no-unreachable-loop': 'off',
    // 'eslint/no-useless-assignment': 'off',
  },
});

/**
 * Pedantic Rules for ESLint - Off By Default
 */
export const eslintPedanticConfig = defineConfig({
  ...baseConfig,
  plugins: ['eslint'],
  rules: {
    'eslint/accessor-pairs': 'error',
    'eslint/array-callback-return': 'error',
    'eslint/eqeqeq': 'error',
    // 'eslint/max-classes-per-file': 'off',
    // 'eslint/max-depth': 'off',
    // 'eslint/max-lines': 'off',
    // 'eslint/max-lines-per-function': 'off',
    // 'eslint/max-nested-callbacks': 'off',
    'eslint/no-array-constructor': 'error',
    'eslint/no-case-declarations': 'error',
    'eslint/no-constructor-return': 'error',
    'eslint/no-else-return': 'error',
    'eslint/no-fallthrough': 'error',
    'eslint/no-inline-comments': 'error',
    'eslint/no-inner-declarations': 'error',
    'eslint/no-lonely-if': 'error',
    'eslint/no-loop-func': 'error',
    'eslint/no-negated-condition': 'error',
    'eslint/no-new-wrappers': 'error',
    'eslint/no-object-constructor': 'error',
    'eslint/no-promise-executor-return': 'error',
    'eslint/no-prototype-builtins': 'error',
    'eslint/no-redeclare': 'error',
    'eslint/no-self-compare': 'error',
    // typescript/only-throw-error
    // 'eslint/no-throw-literal': 'off',
    'eslint/no-useless-return': 'error',
    // 'eslint/no-warning-comments': 'off',
    'eslint/radix': 'error',
    // typescript/require-await
    // 'eslint/require-await': 'off',
    // 'eslint/require-unicode-regexp': 'off',
    // 'eslint/sort-vars': 'off',
    'eslint/symbol-description': 'error',
  },
});

/**
 * Perf Rules for ESLint - Error By Default
 */
export const eslintPerfConfig = defineConfig({
  ...baseConfig,
  plugins: ['eslint'],
  rules: {
    // 'eslint/no-await-in-loop': 'off',
    // 'eslint/no-useless-call': 'off',
  },
});

/**
 * Restriction Rules for ESLint - Off By Default
 */
export const eslintRestrictionConfig = defineConfig({
  ...baseConfig,
  plugins: ['eslint'],
  rules: {
    // 'eslint/class-methods-use-this': 'error',
    // 'eslint/complexity': 'error',
    // 'eslint/default-case': 'error',
    // 'eslint/no-alert': 'error',
    // 'eslint/no-bitwise': 'error',
    // 'eslint/no-console': 'error',
    // 'eslint/no-div-regex': 'error',
    // 'eslint/no-empty': 'error',
    // 'eslint/no-empty-function': 'error',
    // 'eslint/no-eq-null': 'error',
    // 'eslint/no-implicit-globals': 'error',
    // 'eslint/no-param-reassign': 'error',
    // 'eslint/no-plusplus': 'error',
    // 'eslint/no-proto': 'error',
    // 'eslint/no-regex-spaces': 'error',
    // 'eslint/no-restricted-globals': 'error',
    // 'eslint/no-restricted-imports': 'error',
    // 'eslint/no-restricted-properties': 'error',
    // 'eslint/no-sequences': 'error',
    // 'eslint/no-undefined': 'error',
    // 'eslint/no-use-before-define': 'error',
    // 'eslint/no-var': 'error',
    // 'eslint/no-void': 'error',
    // 'eslint/unicode-bom': 'error',
  },
});

/**
 * Style Rules for ESLint - Off By Default
 */
export const eslintStyleConfig = defineConfig({
  ...baseConfig,
  plugins: ['eslint'],
  rules: {
    // 'eslint/arrow-body-style': ['error', 'always'],
    // 'eslint/capitalized-comments': 'off',
    'eslint/curly': 'error',
    'eslint/default-case-last': 'error',
    'eslint/default-param-last': 'error',
    // 'eslint/func-name-matching': 'off',
    'eslint/func-names': 'error',
    // 'eslint/func-style': [
    //   'error',
    //   'declaration',
    //   {
    //     allowArrowFunctions: true,
    //     overrides: {
    //       namedExports: 'expression',
    //     },
    //   },
    // ],
    'eslint/grouped-accessor-pairs': 'error',
    'eslint/guard-for-in': 'error',
    // 'eslint/id-length': 'off',
    // 'eslint/id-match': 'off',
    // 'eslint/init-declarations': ['error', 'always'],
    // 'eslint/logical-assignment-operators': 'off',
    // 'eslint/max-params': 'error',
    // 'eslint/max-statements': 'off',
    'eslint/new-cap': 'error',
    // 'eslint/no-continue': 'off',
    // 'eslint/no-duplicate-imports': 'off',
    'eslint/no-extra-label': 'error',
    'eslint/no-implicit-coercion': 'error',
    'eslint/no-label-var': 'error',
    // 'eslint/no-labels': 'off',
    'eslint/no-lone-blocks': 'error',
    // 'eslint/no-magic-numbers': 'off',
    'eslint/no-multi-assign': 'error',
    // 'eslint/no-multi-str': 'off',
    'eslint/no-nested-ternary': 'error',
    'eslint/no-new-func': 'error',
    'eslint/no-return-assign': 'error',
    'eslint/no-script-url': 'error',
    'eslint/no-template-curly-in-string': 'error',
    'eslint/no-ternary': 'error',
    'eslint/no-useless-computed-key': 'error',
    // 'eslint/object-shorthand': ['off', 'always'],
    'eslint/operator-assignment': 'error',
    'eslint/prefer-arrow-callback': 'error',
    'eslint/prefer-const': 'error',
    'eslint/prefer-destructuring': 'error',
    'eslint/prefer-exponentiation-operator': 'error',
    'eslint/prefer-named-capture-group': 'error',
    'eslint/prefer-numeric-literals': 'error',
    'eslint/prefer-object-has-own': 'error',
    'eslint/prefer-object-spread': 'error',
    'eslint/prefer-promise-reject-errors': 'error',
    'eslint/prefer-regex-literals': 'error',
    'eslint/prefer-rest-params': 'error',
    'eslint/prefer-spread': 'error',
    'eslint/prefer-template': 'error',
    // 'eslint/sort-imports': 'error',
    // 'eslint/sort-keys': 'off',
    // 'eslint/vars-on-top': 'error',
    'eslint/yoda': [
      'error',
      'never',
      {
        exceptRange: true,
        onlyEquality: true,
      },
    ],
  },
});

/**
 * Suspicious Rules for ESLint - Error By Default
 */
export const eslintSuspiciousConfig = defineConfig({
  ...baseConfig,
  plugins: ['eslint'],
  rules: {
    // 'eslint/block-scoped-var': 'off',
    // 'eslint/no-extend-native': 'off',
    // 'eslint/no-extra-bind': 'off',
    // 'eslint/no-implied-eval': 'off',
    // 'eslint/no-new': 'off',
    // 'eslint/no-shadow': 'off',
    // 'eslint/no-underscore-dangle': 'off',
    // 'eslint/no-unexpected-multiline': 'off',
    // 'eslint/no-unmodified-loop-condition': 'off',
    // 'eslint/no-unneeded-ternary': 'off',
    // 'eslint/no-useless-concat': 'off',
    // 'eslint/no-useless-constructor': 'off',
    // 'eslint/preserve-caught-error': 'off',
  },
});

/**
 * Rules for ESLint
 */
export const eslintConfig = defineConfig({
  ...baseConfig,
  plugins: ['eslint'],
  rules: {
    ...eslintCorrectnessConfig.rules,
    ...eslintPedanticConfig.rules,
    ...eslintPerfConfig.rules,
    ...eslintRestrictionConfig.rules,
    ...eslintStyleConfig.rules,
    ...eslintSuspiciousConfig.rules,
  },
});
