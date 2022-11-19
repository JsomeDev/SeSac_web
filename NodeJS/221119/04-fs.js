const fs = require("fs");
fs.readFile("./test.txt", function (err, data) {
  if (err) throw err;

  console.log("data : ", data);
  console.log("data2 :", data.toString()); //문자열 변환 - String(내용)
});

// 파일 시스템 대표적인 비동기 - callback 함수 or promise 사용해서 then으로 가져온다.

const fs2 = require("fs").promises;
fs2.readFile("./test.txt").then((data) => {
  console.log("promise - data : ", data);
});

///
fs2
  .writeFile("./write.txt", "sesac")
  .then(function () {
    return fs2.readFile("./write.txt");
  })
  .then(function (data) {
    console.log(data.toString());
  });

///
fs.writeFile("./write2.txt", "codingon", function (err) {
  if (err) throw err;
  console.log("writeFile success!");
  fs.readFile("./write2.txt", function (err, data) {
    if (err) throw err;
    console.log("write2File data : ", data.toString());
  });
});
