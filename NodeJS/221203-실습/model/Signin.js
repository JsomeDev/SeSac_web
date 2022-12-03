const { response } = require("express");
const mysql = require("mysql");

const cnn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "mama5110",
  database: "somdata",
});

exports.get_userdata = (cb) => {
  var sql = `SELECT * FROM userdata`;

  cnn.query(sql, (err, rows) => {
    if (err) throw err;

    console.log("users: ", rows);
    cb(rows);
  });
};

exports.register_user = (info, cb) => {
  var sql = `
    INSERT INTO userdata (id, pw, name) VALUES ('${info.id}', '${info.pw}', '${info.name}')`;

  cnn.query(sql, (err, result) => {
    if (err) throw err;

    console.log("registered user: ", result);
    cb(result);
  });
};

exports.login_user = (info, cb) => {
  var sql = `
    SELECT * FROM userdata WHERE id = '${info.id}' AND pw = '${info.pw}' 
    `;
  cnn.query(sql, (err, result) => {
    if (err) throw err;
    cb(result);
  });
};
