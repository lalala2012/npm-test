const webpack = require('webpack');
const webpackConfig = require('./webpack.conf.base.js');
webpack(webpackConfig, (err, stats) => {
  // console.log(err, stats);
  console.log('----');
  console.log('end');
  console.log('----');
});