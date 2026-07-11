import { defineConfig } from 'oxlint';

import { baseConfig } from '#src/base-config';

/**
 * Correctness Rules for jsx-a11y - Error By Default
 */
export const jsxA11yCorrectnessConfig = defineConfig({
  ...baseConfig,
  plugins: ['jsx-a11y'],
  rules: {
    // 'jsx-a11y/alt-text': 'off',
    // 'jsx-a11y/anchor-has-content': 'off',
    // 'jsx-a11y/anchor-is-valid': 'off',
    // 'jsx-a11y/aria-activedescendant-has-tabindex': 'off',
    // 'jsx-a11y/aria-props': 'off',
    // 'jsx-a11y/aria-proptypes': 'off',
    // 'jsx-a11y/aria-role': 'off',
    // 'jsx-a11y/aria-unsupported-elements': 'off',
    // 'jsx-a11y/autocomplete-valid': 'off',
    // 'jsx-a11y/click-events-have-key-events': 'off',
    // 'jsx-a11y/control-has-associated-label': 'off',
    // 'jsx-a11y/heading-has-content': 'off',
    // 'jsx-a11y/html-has-lang': 'off',
    // 'jsx-a11y/iframe-has-title': 'off',
    // 'jsx-a11y/img-redundant-alt': 'off',
    // 'jsx-a11y/interactive-supports-focus': 'off',
    // 'jsx-a11y/label-has-associated-control': 'off',
    // 'jsx-a11y/lang': 'off',
    // 'jsx-a11y/media-has-caption': 'off',
    // 'jsx-a11y/mouse-events-have-key-events': 'off',
    // 'jsx-a11y/no-access-key': 'off',
    // 'jsx-a11y/no-aria-hidden-on-focusable': 'off',
    // 'jsx-a11y/no-autofocus': 'off',
    // 'jsx-a11y/no-distracting-elements': 'off',
    // 'jsx-a11y/no-interactive-element-to-noninteractive-role': 'off',
    // 'jsx-a11y/no-noninteractive-element-interactions': 'off',
    // 'jsx-a11y/no-noninteractive-element-to-interactive-role': 'off',
    // 'jsx-a11y/no-noninteractive-tabindex': 'off',
    // 'jsx-a11y/no-redundant-roles': 'off',
    // 'jsx-a11y/no-static-element-interactions': 'off',
    // 'jsx-a11y/prefer-tag-over-role': 'off',
    // 'jsx-a11y/role-has-required-aria-props': 'off',
    // 'jsx-a11y/role-supports-aria-props': 'off',
    // 'jsx-a11y/scope': 'off',
    // 'jsx-a11y/tabindex-no-positive': 'off',
  },
});

// /**
//  * Nursery Rules for jsx-a11y - Off By Default
//  */
// export const jsxA11yNurseryConfig = defineConfig({
//   ...baseConfig,
//   plugins: ['jsx-a11y'],
//   rules: {},
// });

// /**
//  * Pedantic Rules for jsx-a11y - Off By Default
//  */
// export const jsxA11yPedanticConfig = defineConfig({
//   ...baseConfig,
//   plugins: ['jsx-a11y'],
//   rules: {},
// });

// /**
//  * Perf Rules for jsx-a11y - Error By Default
//  */
// export const jsxA11yPerfConfig = defineConfig({
//   ...baseConfig,
//   plugins: ['jsx-a11y'],
//   rules: {},
// });

/**
 * Restriction Rules for jsx-a11y - Off By Default
 */
export const jsxA11yRestrictionConfig = defineConfig({
  ...baseConfig,
  plugins: ['jsx-a11y'],
  rules: {
    // 'jsx-a11y/anchor-ambiguous-text': 'error',
  },
});

// /**
//  * Style Rules for jsx-a11y - Off By Default
//  */
// export const jsxA11yStyleConfig = defineConfig({
//   ...baseConfig,
//   plugins: ['jsx-a11y'],
//   rules: {},
// });

// /**
//  * Suspicious Rules for jsx-a11y - Error By Default
//  */
// export const jsxA11ySuspiciousConfig = defineConfig({
//   ...baseConfig,
//   plugins: ['jsx-a11y'],
//   rules: {},
// });

/**
 * Rules for jsx-a11y
 */
export const jsxA11yConfig = defineConfig({
  ...baseConfig,
  plugins: ['jsx-a11y'],
  rules: {
    ...jsxA11yCorrectnessConfig.rules,
    // No rules in this category
    // ...jsxA11yPedanticConfig.rules,
    // No rules in this category
    // ...jsxA11yPerfConfig.rules,
    ...jsxA11yRestrictionConfig.rules,
    // No rules in this category
    // ...jsxA11yStyleConfig.rules,
    // No rules in this category
    // ...jsxA11ySuspiciousConfig.rules,
  },
});
