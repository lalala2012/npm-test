const webpack = require('webpack');
const webpackConfig = require('./webpack.conf.base.js');
webpack(webpackConfig, (err, stats) => {
  console.log(stats);
  // console.log(err);
  // console.log(err, stats);
  // console.log('----');
  // console.log('end');
  // console.log('----');
});