import { defineConfig } from 'oxlint';

import { baseConfig } from '#src/base-config';

/**
 * Correctness Rules for TypeScript - Error By Default
 */
export const typeScriptCorrectnessConfig = defineConfig({
  ...baseConfig,
  plugins: ['typescript'],
  rules: {
    // 'typescript/await-thenable': 'off',
    // 'typescript/no-array-delete': 'off',
    // 'typescript/no-base-to-string': 'off',
    // 'typescript/no-duplicate-enum-values': 'off',
    // 'typescript/no-duplicate-type-constituents': 'off',
    // 'typescript/no-extra-non-null-assertion': 'off',
    // 'typescript/no-floating-promises': 'off',
    // 'typescript/no-for-in-array': 'off',
    // 'typescript/no-implied-eval': 'off',
    // 'typescript/no-meaningless-void-operator': 'off',
    // 'typescript/no-misused-new': 'off',
    // 'typescript/no-misused-spread': 'off',
    // 'typescript/no-non-null-asserted-optional-chain': 'off',
    // 'typescript/no-redundant-type-constituents': 'off',
    // 'typescript/no-this-alias': 'off',
    // 'typescript/no-unnecessary-parameter-property-assignment': 'off',
    // 'typescript/no-unsafe-declaration-merging': 'off',
    // 'typescript/no-unsafe-unary-minus': 'off',
    // 'typescript/no-useless-default-assignment': 'off',
    // 'typescript/no-useless-empty-export': 'off',
    // 'typescript/no-wrapper-object-types': 'off',
    // 'typescript/prefer-as-const': 'off',
    // 'typescript/prefer-namespace-keyword': 'off',
    // 'typescript/require-array-sort-compare': 'off',
    // 'typescript/restrict-template-expressions': 'off',
    // 'typescript/triple-slash-reference': 'off',
    // 'typescript/unbound-method': 'off',
  },
});

/**
 * Nursery Rules for TypeScript - Off By Default
 */
export const typeScriptNurseryConfig = defineConfig({
  ...baseConfig,
  plugins: ['typescript'],
  rules: {
    // 'typescript/no-unnecessary-condition': 'off',
    // 'typescript/prefer-optional-chain': 'off',
  },
});

/**
 * Pedantic Rules for TypeScript - Off By Default
 */
export const typeScriptPedanticConfig = defineConfig({
  ...baseConfig,
  plugins: ['typescript'],
  rules: {
    'typescript/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': true,
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 10,
      },
    ],
    // 'typescript/ban-types': 'error',
    'typescript/no-confusing-void-expression': 'error',
    'typescript/no-deprecated': 'error',
    'typescript/no-misused-promises': 'error',
    'typescript/no-mixed-enums': 'error',
    'typescript/no-unsafe-argument': 'error',
    'typescript/no-unsafe-assignment': 'error',
    'typescript/no-unsafe-call': 'error',
    'typescript/no-unsafe-function-type': 'error',
    'typescript/no-unsafe-member-access': 'error',
    'typescript/no-unsafe-return': 'error',
    // 'typescript/only-throw-error': 'error',
    'typescript/prefer-enum-initializers': 'error',
    'typescript/prefer-includes': 'error',
    'typescript/prefer-nullish-coalescing': 'error',
    'typescript/prefer-promise-reject-errors': 'error',
    // TODO - add this one in
    // 'typescript/prefer-readonly-parameter-types': 'error',
    'typescript/prefer-ts-expect-error': 'error',
    'typescript/related-getter-setter-pairs': 'error',
    'typescript/require-await': 'error',
    'typescript/restrict-plus-operands': [
      'error',
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
      },
    ],
    'typescript/return-await': ['error', 'always'],
    // 'typescript/strict-boolean-expressions': 'error',
    'typescript/strict-void-return': 'error',
    'typescript/switch-exhaustiveness-check': [
      'error',
      {
        considerDefaultExhaustiveForUnions: true,
      },
    ],
  },
});

// /**
//  * Perf Rules for TypeScript - Error By Default
//  */
// export const typeScriptPerfConfig = defineConfig({
//   ...baseConfig,
//   plugins: ['typescript'],
//   rules: {},
// });

/**
 * Restriction Rules for TypeScript - Off By Default
 */
export const typeScriptRestrictionConfig = defineConfig({
  ...baseConfig,
  plugins: ['typescript'],
  rules: {
    // 'typescript/explicit-function-return-type': 'error',
    // 'typescript/explicit-member-accessibility': 'error',
    // 'typescript/explicit-module-boundary-types': 'error',
    'typescript/no-dynamic-delete': 'error',
    'typescript/no-empty-object-type': 'error',
    'typescript/no-explicit-any': 'error',
    'typescript/no-import-type-side-effects': 'error',
    'typescript/no-invalid-void-type': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-non-null-asserted-nullish-coalescing': 'error',
    'typescript/no-non-null-assertion': 'error',
    'typescript/no-require-imports': 'error',
    // 'typescript/no-restricted-types': 'error',
    // 'typescript/no-var-requires': 'error',
    'typescript/non-nullable-type-assertion-style': 'error',
    'typescript/prefer-literal-enum-member': 'error',
    'typescript/promise-function-async': 'error',
    'typescript/use-unknown-in-catch-callback-variable': 'error',
  },
});

/**
 * Style Rules for TypeScript - Off By Default
 */
export const typeScriptStyleConfig = defineConfig({
  ...baseConfig,
  plugins: ['typescript'],
  rules: {
    'typescript/adjacent-overload-signatures': 'error',
    'typescript/array-type': 'error',
    'typescript/ban-tslint-comment': 'error',
    'typescript/class-literal-property-style': 'error',
    'typescript/consistent-generic-constructors': 'error',
    'typescript/consistent-indexed-object-style': 'error',
    'typescript/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'never',
      },
    ],
    'typescript/consistent-type-definitions': 'error',
    'typescript/consistent-type-exports': 'error',
    // 'typescript/consistent-type-imports': 'error',
    'typescript/dot-notation': 'error',
    'typescript/method-signature-style': ['error', 'property'],
    'typescript/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    'typescript/no-inferrable-types': 'error',
    'typescript/no-unnecessary-qualifier': 'error',
    'typescript/parameter-properties': 'error',
    'typescript/prefer-find': 'error',
    'typescript/prefer-for-of': 'error',
    'typescript/prefer-function-type': 'error',
    'typescript/prefer-readonly': 'error',
    'typescript/prefer-reduce-type-parameter': 'error',
    'typescript/prefer-regexp-exec': 'error',
    'typescript/prefer-return-this-type': 'error',
    'typescript/prefer-string-starts-ends-with': 'error',
    'typescript/unified-signatures': 'error',
  },
});

/**
 * Suspicious Rules for TypeScript - Error By Default
 */
export const typeScriptSuspiciousConfig = defineConfig({
  ...baseConfig,
  plugins: ['typescript'],
  rules: {
    // 'typescript/consistent-return': 'off',
    // 'typescript/no-confusing-non-null-assertion': 'off',
    // 'typescript/no-extraneous-class': 'off',
    // 'typescript/no-unnecessary-boolean-literal-compare': 'off',
    // 'typescript/no-unnecessary-template-expression': 'off',
    // 'typescript/no-unnecessary-type-arguments': 'off',
    // 'typescript/no-unnecessary-type-assertion': 'off',
    // 'typescript/no-unnecessary-type-constraint': 'off',
    // 'typescript/no-unnecessary-type-conversion': 'off',
    // 'typescript/no-unnecessary-type-parameters': 'off',
    // 'typescript/no-unsafe-enum-comparison': 'off',
    // 'typescript/no-unsafe-type-assertion': 'off',
  },
});

/**
 * Rules for TypeScript
 */
export const typeScriptConfig = defineConfig({
  ...baseConfig,
  plugins: ['typescript'],
  rules: {
    ...typeScriptCorrectnessConfig.rules,
    ...typeScriptPedanticConfig.rules,
    // No rules in this category
    // ...typeScriptPerfConfig.rules,
    ...typeScriptRestrictionConfig.rules,
    ...typeScriptStyleConfig.rules,
    ...typeScriptSuspiciousConfig.rules,
  },
});
