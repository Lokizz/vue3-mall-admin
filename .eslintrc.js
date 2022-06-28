/*
 * @Author: MacLoki
 * @Date: 2022-06-26 20:31:45
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-27 21:37:05
 * @FilePath: /vue3-mall-admin/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 0,
    'space-before-function-paren': 0
  }
}
