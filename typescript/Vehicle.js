var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.data = [
            {
                fw: 2,
                bw: 4
            },
            {
                fw: 2,
                bw: 2
            }
        ];
    }
    Vehicle.prototype.getTotalBusWheels = function () {
        return this.data[0].fw + this.data[0].bw;
    };
    Vehicle.prototype.getTotalCarWheels = function () {
        return this.data[1].fw + this.data[1].bw;
    };
    return Vehicle;
}());
var o = new Vehicle();
console.log(o.getTotalBusWheels());
console.log(o.getTotalCarWheels());
