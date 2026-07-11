import { defineConfig } from 'oxlint';

/**
 * Correctness Rules for Import - Error By Default
 */
export const importCorrectnessConfig = defineConfig({
  plugins: ['import'],
  rules: {
    // 'import/default': 'off',
    // 'import/namespace': 'off',
  },
});

/**
 * Nursery Rules for Import - Off By Default
 */
export const importNurseryConfig = defineConfig({
  plugins: ['import'],
  rules: {
    // 'import/export': 'error',
    // 'import/named': 'error',
  },
});

/**
 * Pedantic Rules for Import - Off By Default
 */
export const importPedanticConfig = defineConfig({
  plugins: ['import'],
  rules: {
    // 'import/max-dependencies': 'error',
  },
});

// /**
//  * Perf Rules for Import - Error By Default
//  */
// export const importPerfConfig = defineConfig({
//   plugins: ['import'],
//   rules: {},
// });

/**
 * Restriction Rules for Import - Off By Default
 */
export const importRestrictionConfig = defineConfig({
  plugins: ['import'],
  rules: {
    // 'import/extensions': 'off',
    'import/no-amd': 'error',
    'import/no-commonjs': 'error',
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-relative-parent-imports': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/unambiguous': 'error',
  },
});

/**
 * Style Rules for Import - Off By Default
 */
export const importStyleConfig = defineConfig({
  plugins: ['import'],
  rules: {
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    // 'import/exports-last': 'off',
    'import/first': 'error',
    // 'import/group-exports': 'off',
    'import/newline-after-import': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-default': 'error',
    // 'import/no-named-export': 'off',
    // 'import/no-namespace': 'off',
    // 'import/no-nodejs-modules': 'off',
    // 'import/prefer-default-export': 'off',
  },
});

/**
 * Suspicious Rules for Import - Error By Default
 */
export const importSuspiciousConfig = defineConfig({
  plugins: ['import'],
  rules: {
    'import/no-absolute-path': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css'],
      },
    ],
  },
});

/**
 * Rules for Import
 */
export const importConfig = defineConfig({
  plugins: ['import'],
  rules: {
    ...importCorrectnessConfig.rules,
    ...importPedanticConfig.rules,
    // No rules in this category
    // ...importPerfConfig.rules,
    ...importRestrictionConfig.rules,
    ...importStyleConfig.rules,
    ...importSuspiciousConfig.rules,
  },
});
