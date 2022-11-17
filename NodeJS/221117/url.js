const url = require("url");

// console.log(url);
// console.log(url.parse);
// var obj = url.parse("https://comic.naver.com/webtoon/weekdayList?week=wed");
// console.log(obj);
// console.log(url.format(obj)); //객체로 나눠진 것을 다시 문자열으로

// console.log(obj.protocol);

//var string = new url.URL("https://localhost?name=sesac");

console.log(string.searchParams.getAll("name"));
console.log(string.searchParams.key());
string.searchParams.append("age", "20");
console.log(string.searchParams.getAll("age"));
console.log(string.searchParams.has("abc")); //?뒤에 abc로 시작하는 키가 있는지
