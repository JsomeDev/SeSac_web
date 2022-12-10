const express = require("express");
const session = require("express-session");
const app = express();
const port = 8000;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "test1234",
    resave: false,
    saveUninitialized: true,
  })
);

const user = { id: "timmy", password: "1234" };

//session으로 로그인되어 있는지 아닌지 확인
//로그인 id 정보 => req.session.user 
app.get("/", (req, res) => {
  console.log(req.session.user);
  if (req.session.user) 
    res.render("index", {isLogin: true, id: req.session.user });
  else res.render("index", {isLogin: false});
});

app.get("/login", (req, res) => {
  res.render("login2");
});

app.post("/login", (req, res) => {
  if (req.body.id == user.id && req.body.password == user.password) {
    req.session.user = req.body.id;
    res.send(true);
  } else {
    res.send(false);
  }
});

//하이퍼링크는 기본적으로 get 요청
app.get("/logout", (req,res)=> {
    req.session.destroy(function(err) {
        if (err) throw err ;

        res.redirect("/");
    })
})

app.get("*", (req, res) => {
  res.send("주소가 존재하지 않습니다. 다시 한번 확인해주세요.");
});


app.listen(port, function () {
  console.log("server open: ", port);
});
