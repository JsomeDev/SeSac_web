function func3(flag) {
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve("flag is true.");
    } else {
      reject("flag is false.");
    }
  });
}

func3(false)
  .then(function (msg) {
    console.log("msg1 : ", msg);
  })

  .catch(function (msg) {
    console.log("msg2 :", msg);
  });

//then - resolve or reject
// func3(false).then(
//   function (msg) {
//     console.log("msg1 : ", msg);
//   },
//   function (msg) {
//     console.log("msg2 :", msg);
//   }
// );
