import { defineConfig } from 'oxlint';

/**
 * Correctness Rules for Promise - Error By Default
 */
export const promiseCorrectnessConfig = defineConfig({
  plugins: ['promise'],
  rules: {
    // 'promise/no-callback-in-promise': 'off',
    // 'promise/no-new-statics': 'off',
    // 'promise/valid-params': 'off',
    // 'promise/no-return-in-finally': 'off',
  },
});

// /**
//  * Nursery Rules for Promise - Off By Default
//  */
export const promiseNurseryConfig = defineConfig({
  plugins: ['promise'],
  rules: {
    // 'promise/no-return-in-finally': 'off',
  },
});

// /**
//  * Pedantic Rules for Promise - Off By Default
//  */
// export const promisePedanticConfig = defineConfig({
//   plugins: ['promise'],
//   rules: {},
// });

// /**
//  * Perf Rules for Promise - Error By Default
//  */
// export const promisePerfConfig = defineConfig({
//   plugins: ['promise'],
//   rules: {},
// });

/**
 * Restriction Rules for Promise - Off By Default
 */
export const promiseRestrictionConfig = defineConfig({
  plugins: ['promise'],
  rules: {
    'promise/catch-or-return': 'error',
    'promise/spec-only': 'error',
  },
});

/**
 * Style Rules for Promise - Off By Default
 */
export const promiseStyleConfig = defineConfig({
  plugins: ['promise'],
  rules: {
    'promise/avoid-new': 'error',
    'promise/no-nesting': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/prefer-await-to-then': [
      'error',
      {
        strict: true,
      },
    ],
    'promise/prefer-catch': 'error',
  },
});

/**
 * Suspicious Rules for Promise - Error By Default
 */
export const promiseSuspiciousConfig = defineConfig({
  plugins: ['promise'],
  rules: {
    // 'promise/always-return': 'off',
    // 'promise/no-multiple-resolved': 'off',
    // 'promise/no-promise-in-callback': 'off',
  },
});

/**
 * Rules for Promise
 */
export const promiseConfig = defineConfig({
  plugins: ['promise'],
  rules: {
    ...promiseCorrectnessConfig.rules,
    // No rules in this category
    // ...promisePedanticConfig.rules,
    // No rules in this category
    // ...promisePerfConfig.rules,
    ...promiseRestrictionConfig.rules,
    ...promiseStyleConfig.rules,
    ...promiseSuspiciousConfig.rules,
  },
});
