//narrowing & assertion
//Type이 아직 하나로 확정되지 않았을 경우 Type Narrowing 써야한다.
//어떤 변수가 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작가능
function n(x) {
    //if(x의 타입의 string) 대표적인 Narrowing 방법은 typeof 연산자
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
n(123);
//Narrowing으로 판정해주는 문법들
//1. typeof 변수
//2. 속성명 in 오브젝트자료
//3. 인스턴스 instanceof 부모
//현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정해준다.
function n1(x) {
    var array = [];
    //number(X) "number"(O)
    if (typeof x === "number") {
        array[0] = x;
    }
    else {
        //if문 썼으면 끝까지 써야 안전하다. else, else if 안쓰면 에러로 잡아줄수도
    }
}
n1(123);
//Assertion 문법(타입 덮어쓰기)
function n2(x) {
    var array = [];
    array[0] = x;
    //TS error: number 타입만 들어올수 있음.
    //as number를 붙여주면 그때부터 number로 인식.
}
n2(123);
//assertion 문법의 용도
//1. Narrowing 할때 쓰임
//2. 무슨 타입이 들어올지 100% 확실할떄 쓰셈
//웬만하면 if로 쓰는게 좋다. 만약 as를 쓰게 되면 문자를 넣어도 아무일 없다.(assertion 해놓으면 이런버그 캐치못함)
//3. 비상용 디버깅용으로 쓰는걸 권장!
//예전 as 문법
var 이름3 = "kim";
//<number>이름3;
function n4(x) {
    var array = [];
    x.forEach(function (b) {
        if (typeof b === "string") {
            array.push(parseFloat(b));
        }
        else {
            array.push(b);
        }
    });
    return array;
}
console.log(n4(["1", 2, "3"]));
