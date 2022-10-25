//특정 문자열에서 특정문자 갯수

// let x = "HELLOWORLD";
// let count = 0;
// let search = "L";
// let result = x.indexOf(search);
// while (result !== -1) {
//   count++;
//   result = x.indexOf(search, result + 1);
// }

// console.log(count); //3

//sol

function sol(str, search) {
  let result = 0;
  for (let x of str) {
    if (x === search) result++;
  }
  return result;
}

let str = "HELLOWORLD";
console.log(sol(str, "L"));
