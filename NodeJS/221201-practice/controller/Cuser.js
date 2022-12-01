const User = require("../model/User");

exports.login = (req, res) => {
  res.render("login");
};

exports.loginPost = (req, res) => {
  console.log(req.body);
  let info = User.user();
  if (req.body.id == info.id && req.body.password == info.pw) {
    res.send({ msg: "login success!", color: "blue" });
  } else {
    res.send({
      msg: "아이디 또는 비밀번호를 잘못 입력했습니다.",
      color: "red",
    });
  }
};

exports.loginPost2 = (req, res) => {
  let users = User.user2();
  let user_list = users.split("\n");
  //user_list = ["timmy//12341234//샬라메", "tim//4321//티모시"];

  let login_flag = false;
  let name = "";
  for (let i = 0; i < user_list.length; i++) {
    let user = user_list[i].split("//");
    //user = ["timmy","12341234","샬라메"]
    if (req.body.id == user[0] && req.body.password == user[1]) {
      login_flag = true;
      name = user[2];
      break;
    }
  }
  if (login_flag)
    res.send({ msg: `${name}` + "님 환영합니다.", color: "blue" });
  else
    res.send({
      msg: "아이디 또는 비밀번호를 잘못 입력했습니다.",
      color: "red",
    });
};
