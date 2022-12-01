const express = require("express");
const app = express();

const port = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("실습33");
});

app.post("/form", (req, res) => {
  console.log(req.body);
  if (req.body.id == "somi" && req.body.password == "1234") {
    res.send({ msg: "login success!", color: "blue" });
    //res.send("<p style='color:blue'>login")
  } else {
    res.send({ msg: "login fail!", color: "red" });
  }
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
