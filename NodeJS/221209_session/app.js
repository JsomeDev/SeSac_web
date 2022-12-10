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

const user = { id: "timmy", pw: "1234" };

app.get("/", (req, res) => {
  if (req.session.user) res.render("main", { isLogin: true });
  else res.render("main", { isLogin: false });
});

app.post("/", (req, res) => {
  if (req.body.id == user.id && req.body.pw == user.pw) {
    req.session.user = req.body.id;
    res.render("login", {isLogin: true});
  }});

app.delete("/user", (req, res) => {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send(true);
  });
});

app.get("*", (req,res)=> {
    res.send("주소가 존재하지 않습니다. 다시 한번 확인해주세요.");
})

app.listen(port, function () {
  console.log("server open: ", port);
});
