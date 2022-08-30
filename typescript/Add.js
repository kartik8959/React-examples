var Add = (function () {
    function Add() {
        this.n1 = 10;
        this.n2 = 20;
    }
    Add.prototype.sum = function () {
        console.log(this.n1 + this.n2);
    };
    return Add;
}());
var o = new Add();
o.sum();
