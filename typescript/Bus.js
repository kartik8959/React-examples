var Bus = /** @class */ (function () {
    function Bus() {
        this.data = {
            fw: 2,
            bw: 2
        };
    }
    Bus.prototype.getTotalWheels = function () {
        return this.data.fw + this.data.bw;
    };
    return Bus;
}());
var o = new Bus();
console.log(o.getTotalWheels());
