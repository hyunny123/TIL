// 함수 type alias 부착하려면 함수표현식 사용.

// 1.함수 타입은 ()=>{}모양으로
// 2. 함수표현식에만 type alias 사용가능

type 함수타입 = (a: string) => number;
//function x(a: string): number {}

let aa: 함수타입 = function (a) {
  return 10;
};

//object안에 함수 만들수 있음.
let memsList = {
  name: "lee",
  plusOne(a: number) {
    return a + 1;
  },
  changeName: () => {
    console.log("안녕!");
  },
};
memsList.plusOne(1);

type Mem = {
  name: string;
  plusOne: (a: string) => number;
  changeName: () => void;
};
