/*
 * @Author: 沧澜
 * @Date: 2022-04-15 11:13:51
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-04-18 16:41:14
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb", "@vue/typescript/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // allow Module Federation
    // "import/no-unresolved": [2, { ignore: ["^app_exposes/.*$"] }],
    quotes: 0,
    "import/no-unresolved": 0,
    "no-trailing-spaces": 0,
    "object-curly-newline": 0,
    "implicit-arrow-linebreak": 0,
    "comma-dangle": 0,
    "function-paren-newline": 0,
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
};
