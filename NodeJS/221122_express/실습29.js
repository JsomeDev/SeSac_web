const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use("/static", express.static("static"));
app.use('/views', express.static(__dirname + '/views'));

app.get("/img", (req, res) => {
  res.render("실습29", {
    data: ["1", "2", "3"],
  });
});

app.listen(port, () => {
  console.log("server is open : ", port);
});
