const path = require('path');

module.exports = {
  entry: './src/main.js', // 入口
  output: {
    path: path.resolve(__dirname, 'dist'), // 出口 必须是绝对路径
    filename: 'boundle.js'
  }
};
