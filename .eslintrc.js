module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'airbnb',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'import'],
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'import/prefer-default-export': 'off',
      'no-unused-vars': 'warn',
      'react/prop-types': 'off', // Disable if not using PropTypes
      'jsx-a11y/label-has-associated-control': 'off',
    },
  };
