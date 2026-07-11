import { defineConfig } from 'oxlint';

import { baseConfig } from '#src/base-config';

/**
 * Correctness Rules for JSDoc - Error By Default
 */
export const jsdocCorrectnessConfig = defineConfig({
  ...baseConfig,
  plugins: ['jsdoc'],
  rules: {
    // 'jsdoc/check-property-names': 'off',
    // 'jsdoc/check-tag-names': 'off',
    // 'jsdoc/implements-on-classes': 'off',
    // 'jsdoc/no-defaults': 'off',
    // 'jsdoc/require-property': 'off',
    // 'jsdoc/require-property-description': 'off',
    // 'jsdoc/require-property-name': 'off',
    // 'jsdoc/require-property-type': 'off',
    // 'jsdoc/require-yields': 'off',
  },
});

// /**
//  * Nursery Rules for JSDoc - Off By Default
//  */
// export const jsdocNurseryConfig = defineConfig({
//   ...baseConfig,
//   plugins: ['jsdoc'],
//   rules: {},
// });

/**
 * Pedantic Rules for JSDoc - Off By Default
 */
export const jsdocPedanticConfig = defineConfig({
  ...baseConfig,
  plugins: ['jsdoc'],
  rules: {
    // 'jsdoc/require-param': 'off',
    'jsdoc/require-param-description': 'error',
    // 'jsdoc/require-param-name': 'off',
    // 'jsdoc/require-param-type': 'off',
    // 'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-description': 'error',
    // 'jsdoc/require-returns-type': 'off',
    // 'jsdoc/require-throws-type': 'off',
    // 'jsdoc/require-yields-type': 'off',
  },
});

// /**
//  * Perf Rules for JSDoc - Error By Default
//  */
// export const jsdocPerfConfig = defineConfig({
//   ...baseConfig,
//   plugins: ['jsdoc'],
//   rules: {},
// });

/**
 * Restriction Rules for JSDoc - Off By Default
 */
export const jsdocRestrictionConfig = defineConfig({
  ...baseConfig,
  plugins: ['jsdoc'],
  rules: {
    'jsdoc/check-access': 'error',
    'jsdoc/empty-tags': 'error',
  },
});

/**
 * Style Rules for JSDoc - Off By Default
 */
export const jsdocStyleConfig = defineConfig({
  ...baseConfig,
  plugins: ['jsdoc'],
  rules: {
    'jsdoc/require-throws-description': 'error',
    'jsdoc/require-yields-description': 'error',
  },
});

// /**
//  * Suspicious Rules for JSDoc - Error By Default
//  */
// export const jsdocSuspiciousConfig = defineConfig({
//   ...baseConfig,
//   plugins: ['jsdoc'],
//   rules: {},
// });

/**
 * Rules for JSDoc
 */
export const jsdocConfig = defineConfig({
  ...baseConfig,
  plugins: ['jsdoc'],
  rules: {
    ...jsdocCorrectnessConfig.rules,
    ...jsdocPedanticConfig.rules,
    // No rules in this category
    // ...jsdocPerfConfig.rules,
    ...jsdocRestrictionConfig.rules,
    ...jsdocStyleConfig.rules,
    // No rules in this category
    // ...jsdocSuspiciousConfig.rules,
  },
});
