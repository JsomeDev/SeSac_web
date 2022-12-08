const express = require("express");
const session = require("express-session");
const app = express();
const port = 8000;

app.use(
  session({
    secret: "1234", //임의의 문자열로 세션을 암호화
    resave: false, //변경사항이 없어도 다시 저장을 할 것인지 유무
    //true: 모든 요청마다 세션의 변화가 없어도 세션을 다시 저장함.
    saveUninitialized: true, //초기화되지 않은 세션을 저장하는지 아닌지
    // cookie: { // session id 쿠키에 대한 옵션
    //     httpOnly: true,
    //     maxAge:
    // } ,
    // secure: , //보안 서버에서 작동 - true
  })
);

app.get("/", (req, res) => {
  if (req.session.user) res.render("index", { isLogin: true });
  else res.render("index", { isLogin: false });
  res.send("세션 수업");
});

const user = { id: "a", pw: "1" };

app.post("/login", (req, res) => {
  // req.session = { } 빈값
  //session: client가 가진 고유의 공간 - req를 사용한다.
  if (req.body.id == user.id && req.body.pw == user.pw) {
    req.session.user = req.body.id;
    res.send("로그인 성공");
  } else {
    res.send("로그인 실패");
  }
});

//logout
app.destroy("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("로그아웃 성공!");
  });
});

app.listen(port, function () {
  console.log("server open : ", port);
});
