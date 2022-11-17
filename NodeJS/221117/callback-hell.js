function login(id, pw, cb) {
  setTimeout(function () {
    console.log("사용자 입장");
    cb(id);
  }, 3000);
}

function getVideo(id, cb) {
  setTimeout(function () {
    console.log(id + "의 비디오 리스트");
    cb(["아바타", "라라랜드"]);
  }, 2000);
}

function getDetail(video, cb) {
  setTimeout(function () {
    cb("비디오 제목: " + video);
  }, 1000);
}

//비동기라서 순서가 필요하다 ! -> callback 3번 중첩

login("kim", "1234", function (user) {
  getVideo(user, function (videos) {
    getDetail(videos[0], function (msg) {
      console.log(msg);
    });
  });
});

/*
// 4번째
cb = function(user){
    getVideo(user, );
}
//10번째
cb = function(videos){
    getDetail(videos[0], );
}
// 15번째
cb = function(msg){
    console.log( msg );
}
*/

/*
let user = login(id,pw);
let videos = getVideo(user);
let msg = getDetail(videos[0]);
console.log(msg)
*/

/*
function login(id, pw, cb) {
    console.log("사용자 입장");
    return id;
}
function getVideo(id, cb) {
    console.log( id + "의 비디오 리스트");
    return ['아바타', '라라랜드'];
}
function getDetail(video, cb) {
    return "비디오 제목 : " + video;
}
let user = login('kim', '1234');
let videos = getVideo(user);
let msg = getDetail(videos[0]);
console.log(msg);
*/
