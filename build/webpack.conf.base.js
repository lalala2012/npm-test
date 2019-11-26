const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  // 下面几个配合着用
  // 设定入口的绝对路径
  context: path.resolve(__dirname, '../'),
  entry: './src/index.js',
  // 配置输入文件
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    // 静态资源变量名
    library: 'someLibName',
    // libraryTarget: 'window',
    // libraryTarget: 'this',
    // 这个指向的是window?
    // libraryTarget: 'global',
    // libraryTarget: 'amd',
    // 单个对象导出
    // libraryTarget: 'commonjs',
    // 整个对象导出
    // libraryTarget: 'commonjs2',
    // libraryTarget: 'jsonp',
    // webpack打包成umd最后面的window编写错误 应该换成this
    libraryTarget: 'umd',
    // 没有cmd？
    // libraryTarget: 'cmd',
    auxiliaryComment: 'Test Comment'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ],
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
};