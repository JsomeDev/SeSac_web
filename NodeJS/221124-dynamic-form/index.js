const express = require("express");
const app = express();

const port = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/form", (req,res) => {
  console.log(req.query);
  res.send({msg: "이름은 : " +req.query.name});
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
