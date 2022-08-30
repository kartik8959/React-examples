type DataType={
    fw:number,
    bw:number
}
class Vehicle{
    data:DataType[]=[
        {
            fw:2,
            bw:4
        },
        {
            fw:2,
            bw:2
        }
    ]

    getTotalBusWheels():number{
        return this.data[0].fw+this.data[0].bw
    }
    getTotalCarWheels():number{
        return this.data[1].fw+this.data[1].bw
    }
}

var o=new Vehicle()
console.log(o.getTotalBusWheels())
console.log(o.getTotalCarWheels())
