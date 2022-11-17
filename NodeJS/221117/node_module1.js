// const result = require("./node_module.js");

// console.log(result);
// console.log(result.a);
// console.log(result.b);
// console.log(result.test);
// result.test();

const num = require("./node_module.js");
// num = {a: 1, b: 3}
const a = num.a;
const b = num.b;

function add() {
  return a + b;
}

module.exports = add;

// result = {add: function() { return a + b}}
