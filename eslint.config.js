import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default [
  // Bỏ qua các thư mục không cần lint
  {
    ignores: ['dist', 'node_modules', 'build'],
  },

  // Cấu hình cho các file TypeScript / React
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.app.json'],
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports,
      '@typescript-eslint': tseslint.plugin,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // ✅ Rules cơ bản từ eslint và react
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // ✅ TypeScript rules
      ...tseslint.configs.recommendedTypeChecked[0].rules,

      // ✅ Prettier - tắt những rule gây xung đột
      ...prettier.rules,

      // ✅ Custom rules
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'react/prop-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',


      // ✅ Hooks
      'react-hooks/exhaustive-deps': 'error',

      // ✅ Unused imports
      'unused-imports/no-unused-imports': 'error',

      // ✅ Config react fiber
      "react/no-unknown-property": "off"
    },
  },
];
