const express = require("express");
const app = express();
const path = require('path');
const multer = require("multer");

const port = 8000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const upload = multer({
//   dest: "uploads/",
// });

//multer 파일이 중간이 있을 때 그전까지는 데이터 처리 가능하지만, 그 후는 처리 X
//이름을 지정해주고 싶으면 파일보다 위에 있어야 함.
const upload = multer({
    storage: multer.diskStorage({
        destination(req,file,done) {
            done(null, 'uploads/');
        },
        filename(req,file,done){
            console.log("filename: ",req.body);
            const ext = path.extname(file.originalname);
            const filename = req.body.name + ext;
            done(null, filename);
        }
    })
})


app.get("/file", (req, res) => {
  res.render("file");
});

//file의 name 속성 값을 보내줘야 한다.
//single - 파일을 1개만 업로드할 때.
app.post("/upload", upload.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("Upload Complete");
});

app.post("/upload-array", upload.array("userfile"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send("Upload Complete");
});

app.post(
  "/upload-fields",
  upload.fields([
    { name: "userfile1" },
    { name: "userfile2" },
    { name: "userfile3" },
  ]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("Upload Complete");
  }
);

//미들웨어 함수는 중간에
app.get("/", test, test2, (req, res) => {
  console.log("req.name : ", req.name);
  console.log("hello");
  res.send("hello");
});

function test(req, res, next) {
  req.name = "12345";
  console.log(req.query);
  console.log("test 함수입니다.");
  next(); //test 미들웨어 함수가 끝났고, 다음을 진행해라.
}

function test2(req, res, next) {
  console.log("test2 함수입니다.");
  next();
}

app.listen(port, () => {
  console.log("Server Port : ", port);
});
