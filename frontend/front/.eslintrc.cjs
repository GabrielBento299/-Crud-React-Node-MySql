module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/prefer-default-export': 'off',
    'import/order': 'off',
    'no-unused-vars': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
  },
};
