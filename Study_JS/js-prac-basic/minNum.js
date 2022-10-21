//가장 작은 숫자 찾기

//방법 1
function sol(arr) {
  //자바스크립트에서 안전한 최대 정수값
  let a = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a) {
      a = arr[i];
    }
  }
  return a;
}
let arr = [10, 40, 20, 9, 88];
console.log(sol(arr));

//방법2
let min = Math.min.apply(null, arr);
console.log(min);
