const mysql = require("mysql");

const cnn = mysql.createConnection({
  host: "127.0.0.1",
  user: "user",
  password: "mama5110",
  database: "somdata",
});

exports.signup = (data, cb) => {
  let sql = `INSERT INTO userdata (id, pw, name) VALUES ('${data.id}', '${data.pw}', '${data.name}')`;
  cnn.query(sql, function (err) {
    if (err) throw err;
    cb();
  });
};

exports.login_data = (id, pw, cb) => {
  let sql = `SELECT * FROM userdata WHERE id='${id}' and pw = '${pw}' limit 1;`;
  cnn.query(sql, function (err, result) {
    if (err) throw err;
    cb(result);
  });
};

exports.get_data = (id, cb) => {
  let sql = `SELECT * FROM userdata WHERE id = '${id}' limit 1;`;

  cnn.query(sql, function (err, result) {
    if (err) throw err;

    cb(result);
  });
};

exports.edit_data = (info, cb) => {
  var sql = `UPDATE userdata SET pw = '${info.pw}', name = '${info.name}' WHERE id = '${info.id}'`;

  cnn.query(sql, (err) => {
    if (err) throw err;

    cb();
  });
};

exports.delete_data = (id, cb) => {
  var sql = `DELETE FROM userdata WHERE id ='${id}';`;

  cnn.query(sql, (err) => {
    if (err) throw err;
    cb();
  });
};
