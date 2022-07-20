//function parameter & return
//1. 길고 복잡함 코드를 한단어로 축약가능
//2. 숫자를 넣으면 다룬 숫자가 나오는 블랙박스 역할.
//함수는 파라미터, return 값 타입지정가능
function 함수(x: number): number {
  return x * 2;
}
함수(30);

//예외: 변수만 만들어두면 any타입으로 할당된다.

//함수에서 void 타입 활용가능
//함수는 특이하지만 void라는 타입이 사용가능함.
//'아무것도 없이 공허함'을 뜻하는 타입인데 return 할 자료가 없는 함수의 타입으로 사용가능.
function 함수1(x: number): void {
  //return 1 + 1;
  //이처럼 return이 없을 경우 에러남.
}
//자바스크립트와 다른점
//타입지정된 파라미터는 필수임.
함수1(2);

//파라미터가 비어있어도 오류가 안나게할수있다.
function 함수2(x?: number): void {}
function 함수3(x: number | undefined): void {}
함수2();

// 변수?:number 는 변수:number | undefined 와 같다.

//애매한 타입일 경우 미리 타입검사 필요.
// function 함수4(x:number|string):void{
//     if(x의 타입이 숫자면){
//         console.log(x+3)
//     }
// }

function name2(x: string) {
  if (x) {
    console.log("안녕하세요 홍길동");
  } else {
    console.log("입력없음");
  }
}
name2("홍길동");

function 함수5(x: number | string): number {
  return x.toString().length;
}

function 결혼(a: number, b: boolean, c: string): string | void {
  let score: number = 0;
  score += a;
  if (b === true) {
    score += 500;
  }
  if (c === "상") {
    score += 100;
  }
  if (score >= 600) {
    return "결혼가능";
  }
}
console.log(결혼(100, true, "상"));
