//간단한 변수 타입지정가능
var 이름문자열 = "kim";
var 이름배열 = ["kim", "lee"];
//name 속성은 옵션.
var 이름객체 = { name: "kim" };
//다양한 타입이 들어올 수 있게 하려면 Union type
var 이름유니온타입 = "kim";
var 이름 = 123;
//함수에 타입지정 가능, 아래 함수는 파라미터로 number,return 값으로 number
function a(x) {
    return x * 2;
}
a(123);
var john = [123, true];
var john1 = { name: "kim" };
