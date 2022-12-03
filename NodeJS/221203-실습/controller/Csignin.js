const Signin = require("../model/Signin");

exports.signup = (req, res) => {
  Signin.get_userdata(function () {
    res.render("register");
  });
};

exports.register = (req, res) => {
  Signin.register_user(req.body, function (user) {
    console.log(user);
    res.send(user);
  });
};

exports.login = (req, res) => {
  Signin.login_user(req.body, function (result) {
    console.log("result: " + result[0]);
    if (result.length > 0) {
      res.send({ msg: "로그인 성공" });
      //res.render("logged");
    } else res.send({ msg: "회원 정보를 다시 한번 확인해 주세요." });
  });
};
