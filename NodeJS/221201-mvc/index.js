const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//상대경로로 폴더까지만 적어도 안에 있는 index.js는 읽는다.
//확실하게 "./routes/index"라고 적어줘도 된다. index가 아닌 파일이면 당연히 "./routes.test"라고 적어줘야 한다.
const router = require("./routes");
app.use("/", router);

//모든 라우터 -> 제일 마지막에 써야함(에러 처리)
app.get("*", (req, res) => {
  res.send("주소가 존재하지 않습니다. 다시 한번 확인해주세요.");
});

app.listen(port, () => {
  console.log("server open: ", port);
});
