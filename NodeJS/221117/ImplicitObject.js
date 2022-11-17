//global 내장 객체

console.log(global);
global.console.log(global.console);

// console 내장 객체

let obj = {
  out: {
    in: {
      key: "value",
    },
  },
};
console.log(obj);
console.log(obj["out"]);
console.time("시간"); //time ~ timeEnd까지의 시간 측정
console.error("error");
console.timeEnd("시간");
console.table([{ name: "abc" }, { name: "def" }]);
console.dir(obj, { colors: true, depth: 1 });
console.dir(obj, { colors: true, depth: 2 });
console.trace("Error");
