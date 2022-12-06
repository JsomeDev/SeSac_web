const { User } = require("../model/index");

exports.main = (req, res) => {
  res.render("main");
};

exports.signup = async (req, res) => {
  let data = {
    id: req.body.id,
    pw: req.body.pw,
    name: req.body.name,
  }

  let result = await User.create(data);
  res.send(true);
};

exports.login = (req, res) => {
  res.render("login");
};

exports.loginCheck = async (req, res) => {
  let result = await User.findOne({where: {id: req.body.id, pw: req.body.pw}});

  console.log(result);
  if (result) res.send(true);
  else res.send(false);
}

exports.profile = async (req, res) => {
  let result = await User.findOne({where: {id: req.body.id}});
    if (result) res.render("profile", { data: result });
    else res.redirect("/user/login");
};

exports.profile_edit = async (req, res) => {
  let data = {
    pw: req.body.pw,
    name: req.body.name,
  };

  let result = await User.update(data, {where: {id: req.body.id}});
  res.send(true);
};

exports.profile_delete = async (req, res) => {
  let result = await User.destroy({where: {id: req.body.id}});
  res.send(true);
};
