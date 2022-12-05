const mysql = require("mysql2");

const cnn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "test1234",
  database: "user",
});

exports.signup = (data,cb) => {
    let sql = `INSERT INTO userdata (id, pw, name) VALUES ('${data.id}', '${data.pw}', '${data.name}')`;
    cnn.query(sql, function (err) {
        if (err) throw err;
        cb();
    })
}

exports.login_data = (id, pw, cb) => {
    let sql =  `SELECT * FROM userdata WHERE id='${id}' and pw = '${pw}' limit 1;`;
    cnn.query(sql, function(err, result) {
        if (err) throw err;
        cb(result);
    })
}