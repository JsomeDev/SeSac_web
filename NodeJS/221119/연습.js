console.log("start");
function login(id, cb) {
  setTimeout(() => {
    console.log("login success");
    cb(id);
  }, 2000);
}

login("kim", function (id) {
  console.log(id + "환영");
});

console.log("finish");
