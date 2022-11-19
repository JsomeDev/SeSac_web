/*
 문법 
new Promise(function(resolve, reject) {
  resolve: 함수 형태, 성공했을 때 실행
  reject: 함수 형태, 실패 / 에러를 처리할 때 
}) 
 */

function func1() {
  return new Promise(function (resolve, reject) {
    resolve("성공");
  });
}

func1().then(function (result) {
  console.log("result: ", result);
});
///////then의 첫번째 인자로 resolve된 것이 들어온다.
function func2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("성공");
    }, 1000);
  });
}

func2()
  .then(function (result) {
    console.log("result2: ", result);
    return "a";
  })
  .then(function (abc) {
    console.log("abc : ", abc);
  });
