/**
 * Copyright (c) 2018-present pandolajs, All rights reserved.
 * @fileoverview eslint stand rule for pandolajs project
 * @author JohnHou | 870301137@qq.comll
 * @version 1.0 | 2018-06-24 | JohnHou       // 初始版本
*/

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    'eslint:recommended',
    'standard'
  ],
  rules: {
    "object-curly-spacing": [ "error", "always", { "arraysInObjects": ture, "objectsInObjects": true } ],
    "array-bracket-spacing": [ "error", "always" ]
  }
}
