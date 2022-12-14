//const Visitor = require("../model/Visitor");
const { Visitor } = require("../model/index");

exports.visitor = async (req, res) => {
  let result = await Visitor.findAll();
  res.render("visitor", { data: result });

  // Visitor.findAll()
  // // .then((result)=>{
  // //     console.log(result);
  // //     console.log("id : ", result[0].id);
  // //     res.render("visitor", {data: result});
  // // })

  // SELECT * FROM visitor;

  // Visitor.get_visitor(function(result){
  //     console.log(result);
  //     res.render("visitor", {data: result});
  // })
};

exports.register = async (req, res) => {
    let data = {
        name: req.body.name,
        comment: req.body.comment,
    };

    let result = await Visitor.create(data);
    console.log(result);
    res.send(String(result.id));
    

    // Visitor.create(data).then((result) => {
    //     console.log(result);
    //     res.send(String(result.id));
    // });

    // Visitor.register_visitor( req.body, function(id){
    //     console.log(id);
    //     res.send(String(id));
    // })

    // INSERT INTO visitor (name ,comment) VALUES ('${req.body.name}', '${req.body.comment}')
};

exports.delete = async (req, res) => {
  // mysql req.body.id에 해당하는 데이터를 delete
  // 서버 응답 res.send

    let result = await Visitor.destroy({where: {id: req.body.id}});
    console.log(result);
    res.send(true);

    // Visitor.destroy({
    //     where: {id: req.body.id}
    // })
    // .then((result)=> {
    //     console.log(result);
    //     res.send(true);
    // })

//   console 찍었을 때 1 = 성공, 0 = 실패

//   Visitor.delete_visitor(req.body.id, function () {
//     res.send(true);
//   });

//  DELETE FROM visitor WHERE id = '${req.body.id}';
};

exports.get_visitor_by_id = async (req, res) => {
  // req.query.id 에 해당하는 데이터를 조회
  // 서버 응답 > 조회한 데이터

  let result = await Visitor.findOne({ 
    attributes: ["id", "name", "comment"],
    where: { id: req.query.id } 
  });
  res.send(result);

  // Visitor.findAll({
  //     where : { id: req.query.id },
  //     limit: 1
  // })

  // Visitor.findOne({
  //     where : { id: req.query.id }
  // })
  // .then((result)=> {
  //     res.send(result);
  // })

  // SELECT * FROM visitor WHERE id = req.query.id;

  // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
  //     res.send(rows);
  // });
};

exports.update_visitor = async (req, res) => {
  // req.body 데이터를 mysql 에 update 할 수 있도록
  // 서버의 응답
    let data = {
        name : req.body.name,
        comment : req.body.comment
    };

    let result = await Visitor.update(data, { where: {id: req.body.id}});
    console.log(result);
    res.send(true);

    // Visitor.update(data, { 
    //     where: {id: req.body.id}
    // })
    // .then((result)=> {
    //     console.log(result);
    //     res.send(true);
    // })

// UPDATE visitor SET name = '${req.body.name}', comment = '${req.body.comment}' WHERE id = '${req.body.id}';

//   Visitor.update_visitor(req.body, function () {
//     res.send(true);
//   });
};
