// function func1(call) {
//   console.log(value);
//   call();
// }
// //콜백 함수
// func1("a", function () {
//   console.log("1");
// });

// function func2() {
//   console.log("2");
// }

// func1(func2);

console.log("Start");
function login(id, cb) {
  setTimeout(() => {
    console.log("로그인 성공");
    cb(id);
  }, 2000);
}

login("kim", function (id) {
  console.log(id + "님 환영합니다!");
});

console.log("finish");

//Timeout - 비동기 => 기다리지 않는다.
//비동기를 동기식으로 처리하고 싶기 때문에 Callback 함수를 사용
