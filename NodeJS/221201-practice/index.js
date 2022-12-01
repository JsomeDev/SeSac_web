const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const router = require("./routes");
app.use("/", router);

app.get("*", (req, res) => {
  res.send("주소가 존재하지 않습니다. 다시 한번 확인해주세요.");
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
