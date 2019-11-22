const webpack = require('webpack');
const webpackConfig = require('../src/index');

webpack(webpackConfig, (err, stats) => {
  console.log(err, stats);
});