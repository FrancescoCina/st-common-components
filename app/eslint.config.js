import storybook from 'eslint-plugin-storybook'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

export default [
  {
    ignores: ['**/services/', '**/dist/', '**/coverage/'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {},
  },
  ...storybook.configs['flat/recommended'],
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    rules: {
      'storybook/hierarchy-separator': 'error',
      'storybook/default-exports': 'off',
    },
  },
]
