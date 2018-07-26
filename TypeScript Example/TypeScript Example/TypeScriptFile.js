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
var Student = /** @class */ (function () {
    function Student(Fname, Lname) {
        this.Fname = Fname;
        this.Lname = Lname;
        this.fullname = Fname + Lname;
        alert(this.fullname);
    }
    Student.prototype.getNo = function () {
        alert("30");
    };
    return Student;
}());
var SubsStudent = /** @class */ (function (_super) {
    __extends(SubsStudent, _super);
    function SubsStudent() {
        return _super.call(this, "X", "Y") || this;
    }
    SubsStudent.prototype.getNO = function () {
        return _super.prototype.getNo.call(this);
    };
    return SubsStudent;
}(Student));
//# sourceMappingURL=TypeScriptFile.js.map