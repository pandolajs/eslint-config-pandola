/**
 * Copyright (c) 2018-present pandolajs, All rights reserved.
 * @fileoverview eslint stand rule for pandolajs project
 * @author JohnHou | 870301137@qq.comll
 * @version 1.0 | 2018-03-03 | JohnHou       // 初始版本
*/

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
    'css-modules',
    'flowtype'
  ],
  settings: {
    'flowtype': {
      onlyFilesWithFlowAnnotation: true
    }
  },
  extends: [
    'eslint:recommended',
    'standard',
    'standard-react',
    'plugin:css-modules/recommended',
    'plugin:flowtype/recommended'
  ],
  root: true,
  env: {
    jest: true,
    browser: true
  },
  rules: {
    'css-modules/no-unused-class': [
      'error',
      {
        'camelCase': true
      }
    ],
    'css-modules/no-undef-class': [
      'error',
      {
        'camelCase': true
      }
    ]
  }
}
