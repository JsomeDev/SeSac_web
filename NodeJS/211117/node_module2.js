const result = require("./node_module1.js");

//result = function(){return a + b;}

console.log(result);
console.log(result()); //실제 함수 실행 - 결과값

// {add: Function}의 상태로 넘어오면
// console.log( add.add()); 를 사용해야함
