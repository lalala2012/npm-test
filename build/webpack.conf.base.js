const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  // 文件只能一个个导入，最好有一个入口文件
  // entry: path.resolve(__dirname, '../build/entryTest/main.js'),
  // entry: path.resolve(__dirname, '.entryTest/main.js'),
  // 有无后缀都行，之人文件名，后面loader在自行过滤
  // entry: path.resolve(__dirname, '../src/index.js'),
  // 下面几个配合着用
  // 设定入口的绝对路径
  context: path.resolve(__dirname, '../'),
  // entry: './src/index.js',
  entry: './src/components/index.js',
  // entry: './build/entryTest/main.js',
  // entry: './src/components/downtime/index.vue',
  // entry: './src/components/test/index.vue',
  // 配置输入文件
  output: {
    // path: path.resolve(__dirname, 'dist',),
    // 文件之间支持使用../ 返回上一级
    // path: path.resolve(__dirname, '../dist'),
    // 当前绝对路径
    // filename: 'bundle.js'
    // 配置输出文件
    // 这里配置好了不用在命令行再写输入输出名
    // 输出设定根路径
    library: 'someLibName',
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    // libraryTarget: 'this',
    // libraryTarget: 'commonjs',
    // libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {}
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
      },
      {// 添加这个json，解决如上的报错问题
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin()
  ]
};