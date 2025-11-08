import withNuxt from './.nuxt/eslint.config.mjs'

/**
 * ESLint configuration for Nuxt 4 TypeScript project
 *
 * This configuration extends the Nuxt ESLint configuration and adds
 * custom rules for TypeScript, Vue, and general JavaScript best practices.
 */
const config = withNuxt([
  {
    // Configuration for TypeScript and Vue files
    files: ['**/*.ts', '**/*.tsx', '**/*.vue', '**/*.js', '**/*.jsx'],
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // Vue rules
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-v-html': 'warn',
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/no-required-prop-with-default': 'off',

      // General rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-template': 'error',
    },
  },
  {
    // Specific configuration for config files
    files: ['*.config.{js,ts}', '.nuxtrc.{js,ts}'],
    rules: {
      'no-console': 'off',
    },
  },
])

export default config
