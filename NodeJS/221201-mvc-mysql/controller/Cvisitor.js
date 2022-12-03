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

exports.get_visitor_by_id = (req, res) => {
  //req.query.id에 해당하는 데이터를 조회
  //서버 응답 > 조회한 데이터

  Visitor.get_visitor_by_id_model(req.query.id, function (rows) {
    res.send(rows);
  });
};

exports.update_visitor = (req, res) => {
  //req.body 데이터를 mysql에 update 할 수 있도록
  //서버 응답

  Visitor.update_visitor(req.body, function () {
    res.send(true);
  });
};
