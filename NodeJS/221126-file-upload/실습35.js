const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const fs = require("fs");

const port = 8000;

app.use("/uploads", express.static("uploads"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const upload = multer({
    storage: multer.diskStorage({
        destination(req,file,done) {
            done(null,'uploads/');
        },
        filename(req,file,done){
            const ext= path.extname(file.originalname);
            const filename = req.body.id + ext;
            done(null, filename);
        }
    })   
})


app.get("/", (req, res) => {
  res.render("실습35");
});

app.post("/upload", upload.single("userfile"), (req, res) => {
  var file = req.file.filename
  res.render("image", {name: file})
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
