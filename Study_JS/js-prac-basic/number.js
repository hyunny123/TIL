function candy(num) {
  let result;
  result = Math.ceil(num / 12);
  return result;
}

console.log(candy(25));

console.log(candy(178));

// Math.ceil : 소수값이 존재할 때 값을 올리는 역할을 하는 함수
// Math.floor : 소수값이 존재할 때 소수값을 버리느 역할을 하는 함수
// Math.round : 소수값에 따라 올리거나 버리는 역할을 하는 반올림 함수

let value = 123.456;
let ceilResult = Math.ceil(value);
let floorResult = Math.floor(value);
let roundResult = Math.round(value);

console.log(ceilResult); //124
console.log(floorResult); //123
console.log(roundResult); //123
