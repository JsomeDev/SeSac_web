const mysql = require("mysql");

const cnn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "mama5110",
  database: "somdata",
});

exports.get_visitor = (cb) => {
  var sql = "SELECT * FROM visitor";

  cnn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("visitors: ", rows);
    cb(rows);
  });
};

exports.register_visitor = (info, cb) => {
  //info = req.body; {name : "" , comment: "" }

  var sql = `INSERT INTO visitor(name, comment) VALUES ('${info.name}','${info.comment}')`;

  cnn.query(sql, (err, result) => {
    //result => sql 문을 실행했을 때의 결과가 담긴다.
    if (err) throw err;

    console.log("insert result: ", result);
    cb(result.insertId);
  });
};

exports.delete_visitor = (id, cb) => {
  var sql = `DELETE FROM visitor WHERE id = ${id}`;

  cnn.query(sql, (err, result) => {
    if (err) throw err;

    console.log("delete result: ", result);
    cb();
  });
};

exports.get_visitor_by_id_model = (id, cb) => {
  var sql = `SELECT * FROM visitor WHERE id = ${id}`;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("select by id: ", rows);
    cb(rows[0]);
  });
};

exports.update_visitor = (info, cb) => {
  var sql = `UPDATE visitor SET name = '${info.name}', comment = '${info.comment}' WHERE id = ${info.id}`;

  cnn.query(sql, (err, result) => {
    if (err) throw err;

    console.log("update result: ", result);
    cb();
  });
};
