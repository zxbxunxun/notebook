/* 
    修改webpack配置，并配置路径别名
*/

const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 修改webpack路径别名
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'));
  }
};
