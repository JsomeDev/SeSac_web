const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(function (req, res) {
  fs.readFile("./221029_css실습1_애벌레.html").then(function (data) {
    res.end(data);
  });
});

server.listen(8080, function () {
  console.log("localhost:8080");
});
