var Student = /** @class */ (function () {
    function Student() {
        this.marks = [500, 300, 450, 555, 400];
        this.isAllPass = false;
    }
    Student.prototype.getBelow500Makrs = function () {
        var result = this.marks.filter(function (v) {
            return v < 500;
        });
        return result;
    };
    Student.prototype.fnCheckPassOrFail = function () {
        this.isAllPass = this.marks.every(function (v) {
            return v > 250;
        });
    };
    return Student;
}());
var o = new Student();
console.log(o.getBelow500Makrs());
o.fnCheckPassOrFail();
console.log(o.isAllPass);
