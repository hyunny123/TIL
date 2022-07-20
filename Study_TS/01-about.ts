//설정
//terminal tsc -w STUDY_T folder로 들어와서 하기
//간단한 변수 타입지정가능
let 이름문자열: string = "kim";
let 이름배열: string[] = ["kim", "lee"];

//name 속성은 옵션.
let 이름객체: { name?: string } = { name: "kim" };

//다양한 타입이 들어올 수 있게 하려면 Union type
let 이름유니온타입: string | number = "kim";

//타입은 변수에 담아 쓸수 있음. Type alias
type Name = string | number;
let 이름: Name = 123;

//함수에 타입지정 가능, 아래 함수는 파라미터로 number,return 값으로 number
function a(x: number): number {
  return x * 2;
}
a(123);

//array에 쓸수 있는 tuple 타입
//tuple 타입이란 아래의 경우, "무조건 첫째는 number, 두번째는 boolean"
type Membertuple = [number, boolean];
let john: Membertuple = [123, true];

//object에 타입지정해야할 속성이 너무 많은 경우
type MemberObject = {
  //모든 object 속성:string, 글자로 된 모든 object속성의 타입:string
  [key: string]: string;
};
let john1: MemberObject = { name: "kim" };
