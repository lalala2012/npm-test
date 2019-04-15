// var es6Code = 'let x = n => n + 1';
// var es6Code = `
//   const set = new Set([1, 2, 3, 4, 4]);
//   [...set]
// `;
var es6Code = `
  var test = Promise.resolve();
`;
var es5Code = require('babel-core')
  .transform(es6Code, {
    presets: ['es2015']
  })
  .code;
  console.log(es5Code);