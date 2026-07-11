import { defineConfig } from 'oxlint';

import { baseConfig } from '#src/base-config';

/**
 * Correctness Rules for Vitest - Error By Default
 */
export const vitestCorrectnessConfig = defineConfig({
  ...baseConfig,
  plugins: ['vitest'],
  rules: {
    // 'vitest/expect-expect': 'off',
    // 'vitest/hoisted-apis-on-top': 'off',
    // 'vitest/no-conditional-expect': 'off',
    // 'vitest/no-conditional-tests': 'off',
    // 'vitest/no-disabled-tests': 'off',
    // 'vitest/no-focused-tests': 'off',
    'vitest/no-standalone-expect': [
      'error',
      {
        additionalTestBlockFunctions: ['test.for'],
      },
    ],
    // 'vitest/prefer-snapshot-hint': 'off',
    // 'vitest/require-awaited-expect-poll': 'off',
    // 'vitest/require-local-test-context-for-concurrent-snapshots': 'off',
    // 'vitest/require-mock-type-parameters': 'off',
    // 'vitest/require-to-throw-message': 'off',
    // 'vitest/valid-describe-callback': 'off',
    // 'vitest/valid-expect': 'off',
    // 'vitest/valid-expect-in-promise': 'off',
    // 'vitest/valid-title': 'off',
    // 'vitest/warn-todo': 'off',
  },
});

// /**
//  * Nursery Rules for Vitest - Off By Default
//  */
// export const vitestNurseryConfig = defineConfig({
//   ...baseConfig,
//   plugins: ['vitest'],
//   rules: {},
// });

/**
 * Pedantic Rules for Vitest - Off By Default
 */
export const vitestPedanticConfig = defineConfig({
  ...baseConfig,
  plugins: ['vitest'],
  rules: {
    'vitest/no-conditional-in-test': 'error',
  },
});

// /**
//  * Perf Rules for Vitest - Error By Default
//  */
// export const vitestPerfConfig = defineConfig({
//   ...baseConfig,
//   plugins: ['vitest'],
//   rules: {},
// });

/**
 * Restriction Rules for Vitest - Off By Default
 */
export const vitestRestrictionConfig = defineConfig({
  ...baseConfig,
  plugins: ['vitest'],
  rules: {
    // 'vitest/require-test-timeout': 'error',
  },
});

/**
 * Style Rules for Vitest - Off By Default
 */
export const vitestStyleConfig = defineConfig({
  ...baseConfig,
  plugins: ['vitest'],
  rules: {
    'vitest/consistent-each-for': 'error',
    // 'vitest/consistent-test-filename': 'error',
    'vitest/consistent-test-it': [
      'error',
      {
        withinDescribe: 'test',
      },
    ],
    'vitest/consistent-vitest-vi': 'error',
    // 'vitest/max-expects': 'error',
    // 'vitest/max-nested-describe': 'error',
    'vitest/no-alias-methods': 'error',
    'vitest/no-duplicate-hooks': 'error',
    // 'vitest/no-hooks': 'error',
    'vitest/no-identical-title': 'error',
    'vitest/no-import-node-test': 'error',
    'vitest/no-importing-vitest-globals': 'error',
    'vitest/no-interpolation-in-snapshots': 'error',
    // 'vitest/no-large-snapshots': 'error',
    'vitest/no-mocks-import': 'error',
    // 'vitest/no-restricted-matchers': 'error',
    // 'vitest/no-restricted-vi-methods': 'error',
    'vitest/no-test-prefixes': 'error',
    'vitest/no-test-return-statement': 'error',
    'vitest/no-unneeded-async-expect-function': 'error',
    // 'vitest/padding-around-after-all-blocks': 'error',
    // 'vitest/prefer-called-exactly-once-with': 'error',
    'vitest/prefer-called-once': 'error',
    // 'vitest/prefer-called-times': 'error',
    'vitest/prefer-called-with': 'error',
    'vitest/prefer-comparison-matcher': 'error',
    'vitest/prefer-each': 'error',
    'vitest/prefer-equality-matcher': 'error',
    // 'vitest/prefer-expect-assertions': 'error',
    'vitest/prefer-expect-resolves': 'error',
    // 'vitest/prefer-expect-type-of': 'error',
    'vitest/prefer-hooks-in-order': 'error',
    'vitest/prefer-hooks-on-top': 'error',
    // 'vitest/prefer-import-in-mock': 'error',
    // 'vitest/prefer-importing-vitest-globals': 'error',
    'vitest/prefer-lowercase-title': 'error',
    'vitest/prefer-mock-promise-shorthand': 'error',
    // 'vitest/prefer-mock-return-shorthand': 'error',
    'vitest/prefer-spy-on': 'error',
    // 'vitest/prefer-strict-boolean-matchers': 'error',
    'vitest/prefer-strict-equal': 'error',
    'vitest/prefer-to-be': 'error',
    'vitest/prefer-to-be-falsy': 'error',
    'vitest/prefer-to-be-object': 'error',
    'vitest/prefer-to-be-truthy': 'error',
    'vitest/prefer-to-contain': 'error',
    // 'vitest/prefer-to-have-been-called-times': 'error',
    'vitest/prefer-to-have-length': 'error',
    'vitest/prefer-todo': 'error',
    // TODO - add this one back?
    // 'vitest/require-hook': 'error',
    'vitest/require-top-level-describe': 'error',
  },
});

/**
 * Suspicious Rules for Vitest - Error By Default
 */
export const vitestSuspiciousConfig = defineConfig({
  ...baseConfig,
  plugins: ['vitest'],
  rules: {
    // 'vitest/no-commented-out-tests': 'off',
  },
});

/**
 * Rules for Vitest
 */
export const vitestConfig = defineConfig({
  ...baseConfig,
  plugins: ['vitest'],
  rules: {
    ...vitestCorrectnessConfig.rules,
    ...vitestPedanticConfig.rules,
    // No rules in this category
    // ...vitestPerfConfig.rules,
    ...vitestRestrictionConfig.rules,
    ...vitestStyleConfig.rules,
    ...vitestSuspiciousConfig.rules,
  },
});
