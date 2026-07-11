import { defineConfig } from 'oxlint';

// /**
//  * Correctness Rules for Node - Error By Default
//  */
// export const nodeCorrectnessConfig = defineConfig({
//   plugins: ['node'],
//   rules: {},
// });

// /**
//  * Nursery Rules for Node - Off By Default
//  */
// export const nodeNurseryConfig = defineConfig({
//   plugins: ['node'],
//   rules: {},
// });

// /**
//  * Pedantic Rules for Node - Off By Default
//  */
// export const nodePedanticConfig = defineConfig({
//   plugins: ['node'],
//   rules: {},
// });

// /**
//  * Perf Rules for Node - Error By Default
//  */
// export const nodePerfConfig = defineConfig({
//   plugins: ['node'],
//   rules: {},
// });

/**
 * Restriction Rules for Node - Off By Default
 */
export const nodeRestrictionConfig = defineConfig({
  plugins: ['node'],
  rules: {
    // 'node/handle-callback-err': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/no-process-env': 'error',
  },
});

/**
 * Style Rules for Node - Off By Default
 */
export const nodeStyleConfig = defineConfig({
  plugins: ['node'],
  rules: {
    // 'node/callback-return': 'error',
    // 'node/global-require': 'error',
    // 'node/no-exports-assign': 'error',
    // 'node/no-mixed-requires': 'error',
    // 'node/no-sync': 'error',
  },
});

// /**
//  * Suspicious Rules for Node - Error By Default
//  */
// export const nodeSuspiciousConfig = defineConfig({
//   plugins: ['node'],
//   rules: {},
// });

/**
 * Rules for Node
 */
export const nodeConfig = defineConfig({
  plugins: ['node'],
  rules: {
    // No rules in this category
    // ...nodeCorrectnessConfig.rules,
    // No rules in this category
    // ...nodePedanticConfig.rules,
    // No rules in this category
    // ...nodePerfConfig.rules,
    ...nodeRestrictionConfig.rules,
    ...nodeStyleConfig.rules,
    // No rules in this category
    // ...nodeSuspiciousConfig.rules,
  },
});
