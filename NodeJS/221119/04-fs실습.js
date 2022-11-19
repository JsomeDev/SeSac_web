const fs = require("fs").promises;

fs.writeFile("./sesac.txt", "반갑습니다")
  .then(function () {
    fs.copyFile("./sesac.txt", "./sesac2.txt");
    console.log("paste sesac to sesac2");
    return fs.readFile("./sesac2.txt");
  })
  .then(function () {
    fs.rename("./sesac2.txt", "./new.txt");
    console.log("renaming is done");
  });
