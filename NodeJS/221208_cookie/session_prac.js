const express = require("express");
const session = require("express-session");
const path = require("path");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));

app.use(
  session({
    secret: "1234", 
    resave: false,
    saveUninitialized: true, 
  })
);


app.get("/", (req, res) => {
    if(req.session.user) res.render("main", {isLogin: true}) 
    else res.render("main", {isLogin: false});
});

const user = { id: "som", pw: "1234" };

app.post("/login", (req, res) => {
  if (req.body.id == user.id && req.body.pw == user.pw) {
    req.session.user = req.body.id;
    // res.send({id: req.body.id});
  } 
});

app.get("/login", (req,res)=> {
    res.render("login");   
});

app.delete("/logout", (req, res) => {
    req.session.destroy(function (err) {
      if (err) throw err;
      res.send({logOut: true});
    });
  });

app.listen(port, function () {
  console.log("server open : ", port);
});
