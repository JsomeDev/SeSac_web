const http = require("http");
const fs = require("fs").promises;

//1.client가 서버한테 요청: request
//2.서버가 client한테 응답하는 내용: response
const server = http.createServer(function (req, res) {
  fs.readFile("./test.html").then(function (data) {
    res.end(data.toString()); //내용을 보내면서 응답을 끝내는 end
  });
});

//server.on();// on - 이벤트 등록
//listen - 서버를 실행하고 클라이언트 기다림

server.listen(8080, function () {
  console.log("8080번 포트로");
});
