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
  User.get_data(req.body.id, function (result) {
    if (result.length > 0) res.render("profile", { data: result[0] });
    else res.redirect("/user/login");
  });
};

exports.profile_edit = (req, res) => {
  User.edit_data(req.body, function () {
    res.send(true);
  });
};

exports.profile_delete = (req, res) => {
  User.delete_data(req.body.id, function () {
    res.send(true);
  });
};
