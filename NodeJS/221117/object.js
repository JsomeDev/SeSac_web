console.log("__filename :" + __filename);
console.log("__dirname : " + __dirname);
console.log("----------------------------------");

//Process 객체 = 현재 실행 중인 노드 프로세스 정보
console.log("process.version : ", process.version);
console.log("process.arch : ", process.arch);
console.log("process.platform : ", process.platform);
console.log("process.cpUsage : ", process.cpuUsage());
console.log("----------------------------------");

//os 운영체제 - 내장 모듈이라서 os 를 불러와서 사용해야 함.
const os = require("os");
console.log("os.type : ", os.type());
console.log("os.cpus : ", os.cpus()); //컴퓨터 코어 정보
console.log("os.homedir : ", os.homedir());
console.log("os.freemem : ", os.freemem());

//Path 모듈
const path = require("path");
const file = __filename;
console.log("path.extname : ", path.extname(file)); //확장자를 가져옴
console.log("path.parse : ", path.parse(file)); // 경로를 구분 지음
