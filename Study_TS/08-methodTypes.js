// 함수 type alias 부착하려면 함수표현식 사용.
//function x(a: string): number {}
var aa = function (a) {
    return 10;
};
//object안에 함수 만들수 있음.
var memsList = {
    name: "lee",
    plusOne: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("안녕!");
    },
};
memsList.plusOne(1);
