const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;

app.use(cookieParser());

app.get("/", (req, res) => {

    // if(req.cookeis.NM_POPUP) res.render("ejs file", {popup : "none"});
    // else {res.render("ejs file", {popup: "display"});}
    
    res.send("hello!!");
});

const cookieOption = {
  httpOnly: true, // 클라이언트가 document.cookie 접근할 수 없게 함.
  maxAge: 30000, // 만들어진 순간부터 밀리초(ms) 지난 뒤에 만료 e.g) 30000 => 30초 뒤에 만료
  //expires: "2022-12-08T09:00:00",     // 만료 날짜를 정함. GMT 시간:  2022-12-08T09:00:00
  //path: "/visitor",  //localhost:8000에는 쿠키가 없음. localhost:8000/visitor/~~~ 이 경로에만 쿠키가 있다.  default: "/"
  //secure: false , //true라고 할 경우, https 보안 서버에만 적용됨
  //signed: true , //쿠키 암호화 여부 default: false
};

app.get("/set", (req, res) => {
  res.cookie("NM_POPUP", "1", cookieOption); //서버가 client에게 보내는 응답 -> res가 client에게 쿠키를 만들어서 보내준다. 
  res.send("쿠키 생성 성공!");
});

app.get("/get", (req, res) => {
    console.log(req.cookies);
    console.log(req.cookies.som);
    res.send(req.cookies); // 서버에서 쿠키를 가져오려면? -> 쿠키는 client에 저장되어 있음 -> req 객체를 통해 가져올 수 있다. 
  });

app.listen(port, function () {
  console.log("server open : ", port);
});
