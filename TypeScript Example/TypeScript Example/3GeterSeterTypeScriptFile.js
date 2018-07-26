"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student3GetSet = /** @class */ (function () {
    function Student3GetSet() {
    }
    Object.defineProperty(Student3GetSet.prototype, "StudentName", {
        get: function () {
            return this._StudentName;
        },
        set: function (val) {
            if (val.length == 0) {
                throw "Please Enter Student Name";
            }
            else {
                this._StudentName = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student3GetSet.prototype, "StudentStudentmarks", {
        get: function () {
            return this.StudentStudentmarks;
        },
        set: function (val) {
            if (val < 60) {
                throw "Studentmarks must be greater then 60";
            }
            else {
                this.StudentStudentmarks = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Student3GetSet;
}());
exports.Student3GetSet = Student3GetSet;
//class SubStudent3GetSet extends Student3GetSet {
//} 
//# sourceMappingURL=3GeterSeterTypeScriptFile.js.map