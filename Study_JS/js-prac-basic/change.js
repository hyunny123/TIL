// function solution(str) {
//   return str.replaceAll("A", "#");
// }
function solution(str) {
  let result = "";
  for (let x of str) {
    if (x == "A") result += "#";
    else result += x;
  }
  return result;
}

let str = "BANANA";
console.log(solution(str));
