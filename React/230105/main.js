// @ts-check

// const array = [1, 2, 3, 4, 5];
// console.log(array);

// const copyArr = [...array]; //주소를 가져오는 것이 아니라 값을 가져오는 새로운 배열

// console.log(copyArr);

// console.log(array === copyArr); //false

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};
const copyObj = { ...obj, lupy: 'lupy' };

console.log(obj);
console.log(copyObj);
console.log(obj === copyObj);
