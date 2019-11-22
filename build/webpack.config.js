const path = require('path');

module.exports = {
  entry: './src/index.js',
  // 配置输入文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    // 当前绝对路径
    filename: 'bundle.js'
    // 配置输出文件
    // 这里配置好了不用在命令行再写输入输出名
  },
};