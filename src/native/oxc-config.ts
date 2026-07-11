import { defineConfig } from 'oxlint';

/**
 * Correctness Rules for OXC - Error By Default
 */
export const oxcCorrectnessConfig = defineConfig({
  plugins: ['oxc'],
  rules: {
    // 'oxc/bad-array-method-on-arguments': 'error',
    // 'oxc/bad-char-at-comparison': 'error',
    // 'oxc/bad-comparison-sequence': 'error',
    // 'oxc/bad-min-max-func': 'error',
    // 'oxc/bad-object-literal-comparison': 'error',
    // 'oxc/bad-replace-all-arg': 'error',
    // 'oxc/const-comparisons': 'error',
    // 'oxc/double-comparisons': 'error',
    // 'oxc/erasing-op': 'error',
    // 'oxc/missing-throw': 'error',
    // 'oxc/number-arg-out-of-range': 'error',
    // 'oxc/only-used-in-recursion': 'error',
    // 'oxc/uninvoked-array-callback': 'error',
  },
});

// /**
//  * Nursery Rules for OXC - Off By Default
//  */
// export const oxcNurseryConfig = defineConfig({
//   plugins: ['oxc'],
//   rules: {},
// });

/**
 * Pedantic Rules for OXC - Off By Default
 */
export const oxcPedanticConfig = defineConfig({
  plugins: ['oxc'],
  rules: {
    'oxc/branches-sharing-code': 'error',
  },
});

/**
 * Perf Rules for OXC - Error By Default
 */
export const oxcPerfConfig = defineConfig({
  plugins: ['oxc'],
  rules: {
    // 'oxc/no-accumulating-spread': 'off',
    // 'oxc/no-map-spread': 'off',
  },
});

/**
 * Restriction Rules for OXC - Off By Default
 */
export const oxcRestrictionConfig = defineConfig({
  plugins: ['oxc'],
  rules: {
    // 'oxc/bad-bitwise-operator': 'error',
    // 'oxc/no-async-await': 'error',
    'oxc/no-barrel-file': 'error',
    'oxc/no-const-enum': 'error',
    // 'oxc/no-optional-chaining': 'error',
    // 'oxc/no-rest-spread-properties': 'error',
  },
});

// /**
//  * Style Rules for OXC - Off By Default
//  */
// export const oxcStyleConfig = defineConfig({
//   plugins: ['oxc'],
//   rules: {},
// });

/**
 * Suspicious Rules for OXC - Error By Default
 */
export const oxcSuspiciousConfig = defineConfig({
  plugins: ['oxc'],
  rules: {
    // 'oxc/approx-constant': 'off',
    // 'oxc/misrefactored-assign-op': 'off',
    // 'oxc/no-async-endpoint-handlers': 'off',
    // 'oxc/no-this-in-exported-function': 'off',
  },
});

/**
 * Rules for OXC
 */
export const oxcConfig = defineConfig({
  plugins: ['oxc'],
  rules: {
    ...oxcCorrectnessConfig.rules,
    ...oxcPedanticConfig.rules,
    ...oxcPerfConfig.rules,
    ...oxcRestrictionConfig.rules,
    // No rules in this category
    // ...oxcStyleConfig.rules,
    ...oxcSuspiciousConfig.rules,
  },
});
