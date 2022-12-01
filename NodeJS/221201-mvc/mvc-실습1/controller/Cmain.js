const db = require("../model/db");

exports.main = (req, res) => {
  res.render("실습33");
};

exports.form = (req, res) => {
  console.log(req.body);
  if (req.body.id == "somi" || req.body.password == "1234") {
    res.send({ msg: "login success!", color: "blue" });
  } else {
    res.send({ msg: "login fail!", color: "red" });
  }
};
