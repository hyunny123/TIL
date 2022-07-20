//uniontype, any, unknown

//문자 or 숫자 들어올수 있는 변수는 어떻게?
//|=> or  숫자또는 문자 가능!
//Union Type (타입 2개 이상 합친 새로운 타입 만들기)
let member: number | string = 123;
let member1: number | string | boolean = true;

//숫자 or 문자가 가능한 array/object 타입지정은?
let member3: (number | string)[] = [1, "2", 3];
//아래 경우에는 1234 또는 ["kim"] 이런경우 가능하게 쓰인다.
let member4: number | string[] = 123;
let object: { a: string | number } = { a: "123" };

//any 타입
//모든 자료형 허용함.
let room: any;
room = 123;
room = false;
room = "kim's";
room = [];
//타입실드 해제문법임. 일반 js변수 필요할 경우 쓰임..하지만 비추!!

//unknown 타입
//(any와 같이)모든 자료 허용함.
// 자료를 넣어도 타입은 그대로 unknown이다.
let room1: unknown = "kim's";
room1 = 123;
room1 = true;
room1 = [];
//그러나
let room2: unknown;
//room2 - 1;
//타입스크립트의 엄격함!
// 간단한 수학연산도 타입이 맞아야함.
//unknown은 number타입이 아님.

//let lee: string = room2;
//unknown 타입을 다른곳에 넣으려고 하면 그 쪽에 실드 발동하여 에러 발생.

let age1: string | number;
//age1 + 1;(에러발생)
//왜 타입이 맞는데 +1 이 안되나?
//타입스크립트는 타입 엄격한것을 좋아함.
//string 타입 +1(허용)
//number타입 +1(허용)
//string|number타입 +1 (허용안됨)
//uniontype은 여러개의 타입을 합해서 새로운 타입을 만들어내는 것임.

let age2: unknown = 1;
//age2 - 1;(에러발생)
//변수가 분명 1인데 -1이 안되는 이유?
//우선 타입스크립트는 엄격함.
//숫자타입이어야 숫자처럼 연산을 해준다.
//unknown은 number타입이 가능하긴하지만 모든타입이 다 가능한 unknown타입임으로 안됨.

let user: string = "kim";
let age3: undefined | number = undefined;
let married1: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
