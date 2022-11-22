//express 기본 코드
const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");

//클라이언트가 어떤 경로로 접근할 수 있도록 권한을 줘야함.
//미들웨어 등록 - 가상 경로 , express.static("실제 존재 폴더이름")
//static이라는 실제 존재하는 폴더를 public 경로로 접근할 수 있도록 함
//app.use("/public", express.static("static"));
//app.use( express.static("static")); => src = "img/christmas.jpg"
app.use("/static", express.static("static"));

//localhost:8080 기본 주소
//get -> 2개의 인자 : 라우트, 함수 - 매개변수 무조건
//req => request : 클라이언트가 서버 측에 보내는 요청 / res => response : 서버가 클라이언트 측에 보내는 응답
//res.send => 응답을 보낼 때 send 메소드 사용 - 문자열을 보여줌.
app.get("/", (req, res) => {
  res.send("hello express");
});

//localhost:8080/ejs
app.get("/ejs", (req, res) => {
  res.render("index", {
    title: "index 페이지 입니다.",
    data: ["a", "b", "c"],
  });
});

app.get("/test", (req, res) => {
  //sendFile("절대경로")
  //__dirname : 현재 담겨있는 폴더 경로
  res.sendFile(__dirname + "/views/index.html");
});

//listen - 포트 번호, 함수를 인자로
app.listen(port, () => {
  console.log("server is open : ", port);
});
