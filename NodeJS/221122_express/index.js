//express 기본 코드
const express = require("express");
const app = express();

const port = 8080;

//localhost:8080 기본 주소
//get -> 2개의 인자 : 라우트, 함수 - 매개변수 무조건
//req => request : 클라이언트가 서버 측에 보내는 요청
//res => response : 서버가 클라이언트 측에 보내는 응답
//res.send => 응답을 보낼 때 send 메소드 사용 - 문자열을 보여줌.
app.get("/", (req, res) => {
  res.send("hello express");
});

//localhost:8080/test
app.get("/test", (req, res) => {
  //sendFile("절대경로")
  //__dirname : 현재 담겨있는 폴더
  res.sendFile(__dirname + "/views/index.html");
});

//listen - 포트 번호, 함수를 인자로
app.listen(port, () => {
  console.log("server is open : ", port);
});
