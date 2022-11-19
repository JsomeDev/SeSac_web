//1.os 모듈
const os = require("os");
console.log("os.freemem : ", os.freemem());
console.log("os.totalmem : ", os.totalmem());
console.log("os.homedir : ", os.homedir());

//2.path 모듈
const path = require("path");
const file = __filename;
console.log("path.sep : ", path.sep);
console.log("path.extname : ", path.extname(file));
console.log("path.parse : ", path.parse(file));
