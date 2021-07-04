const path = require("path")

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: path.resolve(`${__dirname}/tsconfig.json`),
  },
  plugins: ["@typescript-eslint", "jest"],
  extends: ["airbnb-typescript/base", "prettier", "prettier/@typescript-eslint"],
  env: {
    node: true,
    "jest/globals": true,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "class-methods-use-this": 0,
    "no-const-assign": "warn",
    "no-this-before-super": "warn",
  },
}
