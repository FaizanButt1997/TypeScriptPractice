//Data Types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var number = 1;
//number = 1235465;
//console.log(number)
var isCapable = true;
var NAME = "Faizan";
var string_arr = ["Fahad", "Ali", "Usman", "Faizan"];
//Any datatype store in array
var any_arr = ["Fahad", true, 123456, 0.5, 'A'];
//Enum
var EOrderInfo;
(function (EOrderInfo) {
    EOrderInfo[EOrderInfo["Delievered"] = 0] = "Delievered";
    EOrderInfo[EOrderInfo["Pending"] = 1] = "Pending";
    EOrderInfo[EOrderInfo["Cancelled"] = 2] = "Cancelled";
    EOrderInfo[EOrderInfo["Late"] = 3] = "Late";
})(EOrderInfo || (EOrderInfo = {}));
;
console.log(EOrderInfo.Pending);
//For Break point in java script we used  keyword
//debugger
//FUnctions
function Getname() {
    console.log("Winter is coming !!!");
}
function OneParameterReceive(string) {
    console.log("Hello" + string);
}
function ReturnValue(number) {
    return number + 231;
}
function PrintInterface(persondetails) {
    alert(persondetails.name + persondetails.CNIC);
}
//Classes
var Student = /** @class */ (function () {
    //Constructor
    function Student() {
        this.name = "Faizan";
    }
    //Setter
    Student.prototype.SetRollNumber = function (n) {
        this.RollNumber = n;
    };
    //Getter
    Student.prototype.GetRollNumher = function () {
        return this.RollNumber;
    };
    //Functions
    Student.prototype.PrintStudent = function () {
        console.log(this.name);
        console.log(this.GetRollNumher());
    };
    return Student;
}());
//Inheritance
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + "is dancings");
    };
    return Person;
}());
var AwesomePerson = /** @class */ (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomePerson.prototype.dance = function () {
        console.log("so awesome");
        _super.prototype.dance.call(this);
    };
    return AwesomePerson;
}(Person));
//# sourceMappingURL=1NewFile.js.map