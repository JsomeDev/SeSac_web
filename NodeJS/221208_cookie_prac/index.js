const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const port = 8000;

app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const cookieOption = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24,
};

//render할 때 쿠키 생성X
app.get("/", (req, res) => {
  // !req.cookies.popup = 1 이면 팝업창이 떠야 한다. 1이면 "none"을
  if(req.cookies.popup == "1" ) res.render("index", {popup: "none"});
  else  res.render("index", {popup: "display"}); 
});

app.post("/popup", (req,res)=> {
  //1. 쿠키를 만든다. - 오늘 하루 열지 않음을 클릭했음을 구분하는 쿠키 생성 
  //   => {popup: 1}
  //2. 서버 응답 (헤더 변경)
  res.cookie("popup", "1", cookieOption);
  res.send(true);
});

app.listen(port, function () {
  console.log("server open : ", port);
});
