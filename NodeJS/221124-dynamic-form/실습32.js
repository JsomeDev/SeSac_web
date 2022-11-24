const express = require("express");
const app = express();

const port = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("실습32");
});

app.get("/form", (req,res)=> {
    console.log(req.query);
    res.send({msg: "이름 : " + req.query.name + " "
                    + "성별 : " + req.query.gender + " "
                    + req.query.birthYear + "년" + " "
                    + req.query.birthMonth + "월" + " "
                    + req.query.birthDate + "일생" });

})

app.listen(port, () => {
  console.log("Server Port : ", port);
});
