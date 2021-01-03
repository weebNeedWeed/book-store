const config = {
  plugins: ["react", "react-hooks", "prettier"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": "off",
    "no-empty": ["warn", { allowEmptyCatch: true }],
    "react/prop-types": "off",
    "prettier/prettier": "warn",
    eqeqeq: "error",
    "no-unused-vars": "warn",
    "global-require": "warn",
    "no-mixed-operators": "error",
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/standard",
    "prettier/babel",
    "prettier",
  ],
};

module.exports = config;
