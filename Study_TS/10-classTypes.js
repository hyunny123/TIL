var Person1 = /** @class */ (function () {
    function Person1(a) {
        this.name = a;
    }
    Person1.prototype.P1 = function (a) {
        console.log("good" + a);
    };
    return Person1;
}());
var P1 = new Person1("lee");
var P2 = new Person1("park");
console.log(P2);
Person1.prototype.P1 = function () { };
//Q
var Car1 = /** @class */ (function () {
    function Car1(a, b) {
        this.model = a;
        this.price = b;
    }
    Car1.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car1;
}());
var car1 = new Car1("소나타", 3000);
console.log(car1);
console.log(car1.tax());
