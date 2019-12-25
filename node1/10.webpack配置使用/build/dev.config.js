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
