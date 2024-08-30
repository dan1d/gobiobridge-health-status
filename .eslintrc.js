module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: { process: "readonly" },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: { react: { version: "detect" } },
  plugins: ["react", "react-hooks", "jsx-a11y", "import", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off", // Not needed with React 17+
    "import/prefer-default-export": "off",
    "no-unused-vars": "warn",
    "prettier/prettier": ["error"],
    "react/prop-types": "off", // Disable if not using PropTypes
    "jsx-a11y/label-has-associated-control": "off",
    "arrow-body-style": ["error", "as-needed"], // Enforce concise arrow functions
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
        unnamedComponents: "function-expression",
      },
    ],
    "max-len": ["error", { code: 100 }], // Limit lines to 100 characters
  },
};
