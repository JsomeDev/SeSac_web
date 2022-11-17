//배열 구조 분해
let list = ["apple", "banana"];
[item1, item2] = list;
//let item1 = list[0];
//let item2 = list[1];
//let item3 = list[2]; 없을 때 값을 넣어서 사용할 수 있다.

[item1, item2 = "peach", item3 = "orange"] = list;
console.log(item1);
console.log(item2);
console.log(item3);
////////////////
let x = 1;
let y = 3;

let temp = x;
x = y;
y = temp;

[y, x] = [x, y];
// [1,3]
//[a,b] = [1,3]

// 객체 구조 분해
let obj = {
  a: "one",
  b: "two",
  e: "1",
  f: "2",
};

// //let key1 = obj.key1;

// let { a, b } = obj;
// console.log(a);
// console.log(b);

let { b: key1, a, c = "three" } = obj;
console.log(a);
console.log(key1);
console.log(c);

//////////////
/// ... => 전개 연산자 - b 빼고 나머지를 전개해서 가져옴. 가장 마지막에 있어야 한다.
/// ...변수명 => 나머지가 들어온다.
let { b, ...rest } = obj;
console.log(b);
console.log(rest);
