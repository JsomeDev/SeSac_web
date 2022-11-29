const mysql = require("mysql");

const cnn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "mama5110",
  database: "somdata",
});

cnn.query("select * from user order by birthday asc", (err, result) => {
  //if (err) console.log(err);
  if (err) throw err;

  console.log(result);
});
