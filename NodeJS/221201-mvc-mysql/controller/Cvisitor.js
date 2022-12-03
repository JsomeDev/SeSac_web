const Visitor = require("../model/Visitor");

//방명록의 데이터를 불러오는 작업
exports.visitor = (req, res) => {
  Visitor.get_visitor(function (result) {
    console.log(result);
    res.render("visitor", { data: result });
  });
};

// insert req.body
exports.register = (req, res) => {
  Visitor.register_visitor(req.body, function (id) {
    console.log(id);
    res.send(String(id));
    //ejs 파일에서 response.data로 보내진다.
  });
};

exports.delete = (req, res) => {
  //mysql에서 req.body.id에 해당하는 데이터를 delete
  // 서버 응답 res.send

  Visitor.delete_visitor(req.body.id, function () {
    res.send(true);
  });
};
