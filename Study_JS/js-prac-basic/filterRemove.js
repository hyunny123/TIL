//반복되는 단어 제거하기
function sol(str) {
  let result;
  result = str.filter((val, i) => {
    if (str.indexOf(val) === i) return val;
  });
  return result;
}

// function sol(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === i) result += str[i];
//   }
//   return result;
// }

let str = ["good", "morning", "good", "afternoon", "good", "evening"];

console.log(sol(str));
