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
        use: [
          //   {
          //     loader: 'file-loader',
          //     options: {
          //       name: './dist/style/[name].[ext]'
          //     }
          //   },
          //   {
          //       loader:'extract-loader',
          //     //   options:{
          //     //       publicPath:'./dist'
          //     //   }
          //   },

          //   { loader: 'css-loader' }
          //   {
          //     loader: 'file-loader',
          //     options: {
          //       name: 'style/[name].[ext]'
          //     }
          //   },
          //   {
          //     loader: 'extract-loader',
          //     // options: {
          //     //   publicPath: '../'
          //     // }
          //   },
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
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
