require('babel-polyfill');
const target = require('./util/tool')
console.log(target);
// const testPromise = Promise.resolve();
const testPromise = new Promise((resolve, reject) => {
  resolve();
});
exports.showMsg = function () {
  const test = "wfa's second module";
  const test1 = target;
  console.log(test + ' ' + test1);
};