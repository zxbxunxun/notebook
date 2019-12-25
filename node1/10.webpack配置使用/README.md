# webpack 配置

## 1.简述

- webpack 依赖 node 环境，需要在 node 中运行，其使用了 node/express

- 开发环境中，当前 package.json 中使用的 webpack 版本优先于全局 webpack

## 2.使用

- npm init 初始载入 package.json 配置文件

- npm install --save-dev webpack@版本号 项目安装 webpack

- 创建 webpack.config.js

- package.json 中配置"scripts" 注册 npm run [自定义命令]

  > 例如 "build":"webpack"

- module.exports 导出配置对象

## 3.基本配置

1.entry 入口，使用相对路径

```javascript
const path = require('path'); // 使用node绝对路径
const webpack = require('webpack'); // webpack依赖

module.exports = {
  entry: './src/main.js'
};
```

2.output 出口，使用绝对路径

```javascript
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'), // 导出路径
    filename: 'index.js' // 文件名
  }
};
```

3.module.rules loader 规则

```javascript
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      //   配置多个loader
    ]
  }
};
```

4.resolve 明确版本号，主要用于 vue

```javascript
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      //   配置多个loader
    ]
  },
  resolve: {
    //  明确vue使用版本
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  }
};
```

5.plugins 扩展插件

```javascript
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      //   配置多个loader
    ]
  },
  resolve: {
    //  明确vue使用版本
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    //   配置多个插件
  ]
};
```

6.devServer 热加载服务器

```javascript
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      //   配置多个loader
    ]
  },
  resolve: {
    //  明确vue使用版本
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    //   配置多个插件
  ],
  devServer: {
    //   该属性依赖webpack-dev-server 包
    contentBase: './dist', // 根文件
    inline: true, // 页面实时刷新
    port: 20491 // 端口号
  }
};
```

## 4.常用 Loader

1.css loader 依赖 style-loader

2.babel loader

3.vue-loader

> loader 使用

```javascript
rules: [
  {
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
  },
  {
    //   babel转换为es2015
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['es2015']
      }
    }
  },
  //   编译vue模板
  {
    test: /\.vue$/,
    use: ['vue-loader']
  }
];
```

## 5.常用插件

1.html-webpack-plugin

2.vue-loader/lib/plugin

3.vue-loader/lib/plugin

> 插件使用

```javascript
  plugins: [
    // 配置说明
    new webpack.BannerPlugin('版权最终归aaa所有'),
    // 自动创建html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    // 解析vue组件插件
    new VueLoaderPlugin(),
    // js压缩插件
    new UglifyjsWebPackPlugin()
  ],
```

## 6.常用包

1.webpack-dev-server

> 自动打开预览

> - "dev": "webpack-dev-server --open "

## 7.开发生产配置分离

1.依赖包 webpack-merge

2.使用

    2.1 创建 build 配置目录

    2.2 抽离公共配置到 base.config.js

```javascript
const path = require('path');
const webpack = require('webpack');

// 自动生成index
const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack.config.js
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// uglifyjs
const UglifyjsWebPackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'boundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        //   babel转换为es2015
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      //   编译vue模板
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  resolve: {
    //  明确vue使用版本
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // 配置说明
    new webpack.BannerPlugin('updateTime:' + Date.now().toLocaleString()),
    // 自动创建html
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),
    // 解析vue组件插件
    new VueLoaderPlugin()
    // // js压缩插件
    // new UglifyjsWebPackPlugin()
  ]
};
```

    2.3 抽离开发配置到 dev.config.js

```javascript
// 合并配置文件
const webpackMerge = require('webpack-merge');

const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist', // 根文件
    inline: true, // 页面实时刷新
    port: 20491
  }
});
```

    2.4 抽离生产配置到 prod.config.js

```javascript
// uglifyjs
const UglifyjsWebPackPlugin = require('uglifyjs-webpack-plugin');

// 合并配置文件
const webpackMerge = require('webpack-merge');

const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig, {
  plugins: [new UglifyjsWebPackPlugin()]
});
```

    2.5 package.json 配置

```json
"scripts": {
        "build": "webpack --config ./build/prod.config.js", // 生产依赖
        "dev": "webpack-dev-server --open --config ./build/dev.config.js" // 开发依赖
    }
```
