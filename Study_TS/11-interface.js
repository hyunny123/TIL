//interface
//interface vs type
//차이점: interface 중복선언 가능
//차이점: type 중복선언 불가능
//다른 사람들이 많이 이용할 거 같으면 object타입결정시 interface 사용하기
//장점: extends로 복사가능
var student = { name: "kim" };
var teacher = { name: "lee", age: 30 };
var square = { color: "red", width: 100 };
var square1 = { color: "blue", width: 100 };
var Miya = { age: 10, name: "lee" };
var product = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };
var obj = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
};
