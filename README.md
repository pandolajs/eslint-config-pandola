# eslint-config-pandola

[![npm version](https://badge.fury.io/js/eslint-config-pandola.svg)](https://badge.fury.io/js/eslint-config-pandola)

> pandolajs 是一个基于 React, Koa2 框架为基础，使用 Webpack 进行构建的，为了统一前端技术栈，降低前端一线开发人员的前端工程化整体解决方案。他将囊括项目脚手架，组件库，构建工具，mock 平台，联调/测试/上线部署方案于一身，成为真正的前端开发的魔力宝盒。

## What is this

`eslint-config-pandola` 是专门为通过 `generator-pandora-app` 脚手架生成的应用提供的一套 eslint 代码规范。

## Usage

- 首先你需要确保项目中已经安装版本 >=4.8.1 的 eslint，如果没有，可以通过以下命令进行安装：

```
  npm i -D eslint
```

- 安装 eslint-config-pandola

```
  npm i -D eslint-config-pandola
```

- 配置: 新建 .eslintrc.json 然后在加入如下配置：

```
  {
    "extends": "pandola"
  }
```

没错，就是这么简单。

## Others

- parser 默认使用 babel-eslint

- plugins 设置
  - import
  - node
  - promise
  - standard
  - react
  - css-modules
  - flowtype

- extends 规则
  - eslint:recommended
  - eslint-config-standard
  - eslint-config-santdard-react
  - plugin:css-modules/recommended
  - plugin:flowtype/recommended

- env 设置
  - browser
  - jest
  - node
  - es6
  
- 查看所有规则可以通过在该项目下执行 `npm run lint:rules` 命令查看所有的配置生效的规则，并且会列出所有规则的说明文档，你也可以执行 `npm run lint:rules | grep 你想知道的 rule 名` 来查看具体某条规则的说明。

- css-modules:

  我们可以通过 `/* eslint css-modules/no-unused-class: [2, { markAsUsed: ['some-css-class'] }] */` 来处理无法静态检测到的 css class.
