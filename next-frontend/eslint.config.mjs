import js from '@eslint/js';
import globals from 'globals';
export default [{ ignores: ['.next/**', 'node_modules/**', 'react-source/**', 'public/**'] }, {
  files: ['**/*.{js,jsx,mjs}'],
  languageOptions: { ecmaVersion: 'latest', sourceType: 'module', globals: { ...globals.browser, ...globals.node }, parserOptions: { ecmaFeatures: { jsx: true } } },
  rules: { ...js.configs.recommended.rules, 'no-unused-vars': 'off' },
}];
