const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 8000;

const cnn = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "mama5110",
  database: "somdata",
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  cnn.query("select * from user", (err, result) => {
    if (err) throw err;

    console.log(result);
    res.render("index", { rows: result });
  });
});

app.get("/sql", (req, res) => {
  cnn.query("select name, gender, age from user", (err, result) => {
    if (err) throw err;

    console.log(result);
    res.render("practice", { rows: result });
  });
});

app.listen(port, () => {
  console.log("Server is open: ", port);
});
