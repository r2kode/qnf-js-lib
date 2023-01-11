module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: ['/dist/**/*', '/.eslintrc.cjs'],
  rules: {
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'ignore',
        asyncArrow: 'always',
      },
    ],
    'comma-dangle': ['off'],
  },
};
