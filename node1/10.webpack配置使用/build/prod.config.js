// uglifyjs
const UglifyjsWebPackPlugin = require('uglifyjs-webpack-plugin');

// 合并配置文件
const webpackMerge = require('webpack-merge');

const baseConfig = require('./base.config');
module.exports = webpackMerge(baseConfig, {
  plugins: [new UglifyjsWebPackPlugin()]
});
// module.exports = {
//   plugins: [
//     // js压缩插件
//     new UglifyjsWebPackPlugin()
//   ]
// };
