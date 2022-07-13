//primitive types
//변수에 타입지정가능 : (장점)타입이 실수로 변경될떄 에러내줌
//변수명: 타입명
//변수에 실드씌우는 것임.
var name1 = "kim";
var age = 21;
var married = true;
//undefined,null 타입도 있음. null:비어있음, undefined:정의가 되지 않았음.
var baby = null;
//변수 하나에 여러자료 넣고싶은 경우 array 자료형을 쓰면 됨.
//array 자료에 타입지정 가능
//문자만 담긴 array 가능
var members = ["kim", "lee", "park"];
//array에 숫자랑 문자를 동시에 넣고 싶은 경우 =>Union type
//변수 하나에 여러자료 넣고싶은 경우 object 자료형 써도 가능.
//object 자료에도 타입지정 가능
//이 변수엔 object만 들어올수 있음!
var newMembers = {
    member1: "kim",
    member2: "lee",
};
//tip!!
//타입지정 자동으로 가능. 타입지정 문법 생략가능
var happy = true;
var favSong = {
    song: "hello",
    singer: "adele",
};
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
