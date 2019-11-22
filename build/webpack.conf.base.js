const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  // entry: '../src/components/index.js',
  // entry: '../src/index.js',
  // 文件只能一个个导入，最好有一个入口文件
  entry: path.resolve(__dirname, 'entryTest/main'),
  // 配置输入文件
  output: {
    // path: path.resolve(__dirname, 'dist',),
    // 文件之间支持使用../ 返回上一级
    path: path.resolve(__dirname, '../dist',),
    // 当前绝对路径
    filename: 'bundle.js'
    // 配置输出文件
    // 这里配置好了不用在命令行再写输入输出名
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'),
          resolve('test'),
          resolve('node_modules/webpack-dev-server/client'),
        ],
      }
    ],
  },
};