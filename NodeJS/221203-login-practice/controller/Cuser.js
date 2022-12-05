const User = require("../model/User");

exports.main = (req, res) => {
  res.render("main");
};

exports.signup = (req, res) => {
  User.signup(req.body, function () {
    res.send(true);
  });
};

exports.login = (req, res) => {
  res.render("login");
};

exports.loginCheck = (req, res) => {
  User.login_data(req.body.id, req.body.pw, function (result) {
    if (result.length > 0) res.send(true);
    else res.send(false);
  });
};

exports.profile = (req, res) => {
  res.render("profile");
};
