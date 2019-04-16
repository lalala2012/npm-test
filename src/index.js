require('babel-polyfill');
const target = require('./util/tool')
console.log(target);
// const testPromise = Promise.resolve();
const testPromise = new Promise((resolve, reject) => {
  resolve();
});
console.log('promise打印');
console.log(testPromise);
console.log('promise打印');
testPromise.then(() => {
  console.log('异步回调执行成功')
})
exports.showMsg = function () {
  const test = "wfa's second module";
  // const test1 = target;
  console.log(test + ' ' + test1);
};
console.log('0000');