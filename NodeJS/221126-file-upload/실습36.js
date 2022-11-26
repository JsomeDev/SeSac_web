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
    destination(req, file, done) {
      done(null, "uploads/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, req.body.id + ext);
    },
  }),
});

app.get("/register", (req, res) => {
  res.render("실습36");
});

app.post("/register", upload.single("userfile"), (req, res) => {
  res.send({ path: req.file.path });
});

app.listen(port, () => {
  console.log("Server Port : ", port);
});
