function func1(callback) {
  console.log("func1");
  console.log(callback);
  callback("이름");
}
function func2(name) {
  console.log("func2");
  console.log("name :", name);
}

func1(func2);

////위와 아래 같은 결과

func1(function (name) {
  console.log("func2");
  console.log("name :", name);
});

func1().then(function (name) {
  console.log("func2");
  console.log("name :", name);
});

/////다르지 않다.
// var a = 1;
// test(a);
// test(1);
