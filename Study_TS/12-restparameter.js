var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//rest-parameter
//...붙이면 파라미터 100만개 들어올 수 있다.
//다른 파라미터 뒤에 써야한다.
function x() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
//x(1,5,3,5,6,6)
//...
//array나 오브젝트 옆에 붙이면 괄호 벗겨달라.
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3);
//destructuring
//생김새 왼쪽 맞춰주고 오른쪽 작명.
//변수이름을 속성이름과 맞춰주는게 편리.
var _a = ["안녕", 100], w1 = _a[0], w2 = _a[1];
console.log(w1);
var _b = { student2: true, age4: 20 }, student2 = _b.student2, age4 = _b.age4;
var person = { student2: true, age4: 20 };
function 함수(_a) {
    var student2 = _a.student2, age4 = _a.age4;
    console.log(student2, age4);
}
console.log(함수({ student2: true, age4: 20 }));
//최대수
function maxNum() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var last = 0;
    a.forEach(function (i) {
        if (last < i) {
            last = i;
        }
    });
    return last;
}
console.log(maxNum(4, 6, 3, 2));
//Q.
function 함수1(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
console.log(함수1({ user: "kim", comment: [3, 5, 4], admin: false }));
function 함수1(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
console.log(함수1({ user: "kim", comment: [3, 5, 4], admin: false }));
function 함수2(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
함수2([40, "wine", false]);
