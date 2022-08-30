type BusType={
    fw:number,
    bw:number
}
class Bus{
    data:BusType={
        fw:2,
        bw:2
    }

    getTotalWheels():number{
        return this.data.fw+this.data.bw
    }
}

var o=new Bus()
console.log(o.getTotalWheels())