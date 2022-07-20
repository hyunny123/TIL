let name3: "kim";
name3 = "kim";
//name3 = 123; //더 엄격하게 literal types

let iam: "single" | "long-hair";
iam = "single";

function x(a: "hello"): 1 | 0 {
  return 0;
}
x("hello");

function x1(a: "가위" | "바위" | "보"): ("가위" | "바위" | "보")[] {
  return ["가위"];
}

let 자료 = {
  name: "lee",
} as const;
자료.name;
//a: lee라는 타입만 들어올수 있다.(O) lee라는 자료만 들어올수 있다.(X)
function m(a: "lee") {}

m("lee");
//m(자료.name) //오류남.
//해결방법
//1.object만들 때 타입지정 확실히하기.
//2. as 문법으로 타입을 거짓으로 지정.
//3. as const (사용시 literal type 지정 임의로 해준다.)(readonly 붙여줌.)
