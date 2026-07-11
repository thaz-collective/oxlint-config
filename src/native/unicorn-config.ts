import { defineConfig } from 'oxlint';

import { baseConfig } from '#src/base-config';

/**
 * Correctness Rules for Unicorn - Error By Default
 */
export const unicornCorrectnessConfig = defineConfig({
  ...baseConfig,
  plugins: ['unicorn'],
  rules: {
    // 'unicorn/no-await-in-promise-methods': 'off',
    // 'unicorn/no-empty-file': 'off',
    // 'unicorn/no-invalid-fetch-options': 'off',
    // 'unicorn/no-invalid-remove-event-listener': 'off',
    // 'unicorn/no-new-array': 'off',
    // 'unicorn/no-single-promise-in-promise-methods': 'off',
    // 'unicorn/no-thenable': 'off',
    // 'unicorn/no-unnecessary-await': 'off',
    // 'unicorn/no-useless-fallback-in-spread': 'off',
    // 'unicorn/no-useless-length-check': 'off',
    // 'unicorn/no-useless-spread': 'off',
    // 'unicorn/prefer-set-size': 'off',
    // 'unicorn/prefer-string-starts-ends-with': 'off',
  },
});

/**
 * Nursery Rules for Unicorn - Off By Default
 */
export const unicornNurseryConfig = defineConfig({
  ...baseConfig,
  plugins: ['unicorn'],
  rules: {
    // 'unicorn/no-useless-iterator-to-array': 'error',
  },
});

/**
 * Pedantic Rules for Unicorn - Off By Default
 */
export const unicornPedanticConfig = defineConfig({
  ...baseConfig,
  plugins: ['unicorn'],
  rules: {
    'unicorn/consistent-assert': 'error',
    'unicorn/consistent-empty-array-spread': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-array-callback-reference': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-immediate-mutation': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-negated-condition': 'error',
    'unicorn/no-negation-in-equality-check': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-typeof-undefined': 'error',
    'unicorn/no-unnecessary-array-flat-depth': 'error',
    'unicorn/no-unnecessary-array-splice-count': 'error',
    'unicorn/no-unnecessary-slice-end': 'error',
    'unicorn/no-unreadable-iife': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-blob-reading-methods': 'error',
    'unicorn/prefer-code-point': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-event-target': 'error',
    'unicorn/prefer-import-meta-properties': 'error',
    'unicorn/prefer-math-min-max': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-native-coercion-functions': 'error',
    'unicorn/prefer-number-coercion': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-single-call': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-top-level-await': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
  },
});

/**
 * Perf Rules for Unicorn - Error By Default
 */
export const unicornPerfConfig = defineConfig({
  ...baseConfig,
  plugins: ['unicorn'],
  rules: {
    // 'unicorn/prefer-array-find': 'off',
    // 'unicorn/prefer-array-flat-map': 'off',
    // 'unicorn/prefer-set-has': 'off',
  },
});

/**
 * Restriction Rules for Unicorn - Off By Default
 */
export const unicornRestrictionConfig = defineConfig({
  ...baseConfig,
  plugins: ['unicorn'],
  rules: {
    // 'unicorn/import-style': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-anonymous-default-export': 'error',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-reduce': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-length-as-slice-end': 'error',
    'unicorn/no-magic-array-flat-depth': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-useless-error-capture-stack-trace': 'error',
    'unicorn/prefer-modern-math-apis': 'error',
    'unicorn/prefer-module': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
  },
});

/**
 * Style Rules for Unicorn - Off By Default
 */
export const unicornStyleConfig = defineConfig({
  ...baseConfig,
  plugins: ['unicorn'],
  rules: {
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-date-clone': 'error',
    'unicorn/consistent-existence-index-check': 'error',
    'unicorn/consistent-template-literal-escape': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/error-message': 'error',
    // 'unicorn/explicit-timer-delay': 'error',
    'unicorn/filename-case': 'error',
    // 'unicorn/max-nested-calls': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-await-expression-member': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-nested-ternary': 'error',
    // 'unicorn/no-null': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-useless-collection-argument': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-bigint-literals': 'error',
    'unicorn/prefer-class-fields': 'error',
    'unicorn/prefer-classlist-toggle': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    // 'unicorn/prefer-export-from': 'error',
    // 'unicorn/prefer-global-this': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-response-static-json': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-raw': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-structured-clone': 'error',
    // 'unicorn/prefer-ternary': 'error',
    // 'unicorn/relative-url-style': 'error',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-module-attributes': 'error',
    'unicorn/switch-case-braces': 'error',
    'unicorn/switch-case-break-position': 'error',
    'unicorn/text-encoding-identifier-case': 'error',
    'unicorn/throw-new-error': 'error',
  },
});

/**
 * Suspicious Rules for Unicorn - Error By Default
 */
export const unicornSuspiciousConfig = defineConfig({
  ...baseConfig,
  plugins: ['unicorn'],
  rules: {
    // 'unicorn/consistent-function-scoping': 'off',
    // 'unicorn/no-accessor-recursion': 'off',
    // 'unicorn/no-array-fill-with-reference-type': 'off',
    // 'unicorn/no-array-reverse': 'off',
    // 'unicorn/no-array-sort': 'off',
    // 'unicorn/no-confusing-array-with': 'off',
    // 'unicorn/no-instanceof-builtins': 'off',
    // 'unicorn/prefer-add-event-listener': 'off',
    // 'unicorn/require-module-specifiers': 'off',
    // 'unicorn/require-post-message-target-origin': 'off',
  },
});

/**
 * Rules for Unicorn
 */
export const unicornConfig = defineConfig({
  ...baseConfig,
  plugins: ['unicorn'],
  rules: {
    ...unicornCorrectnessConfig.rules,
    ...unicornPedanticConfig.rules,
    ...unicornPerfConfig.rules,
    ...unicornRestrictionConfig.rules,
    ...unicornStyleConfig.rules,
    ...unicornSuspiciousConfig.rules,
  },
});
