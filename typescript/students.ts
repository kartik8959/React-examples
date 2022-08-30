class Student{
    marks:number[]=[500,300,450,555,400]
    isAllPass:boolean=false

    getBelow500Makrs():number[]{
       let result= this.marks.filter((v)=>{
            return v<500
        })
        return result
    }
    fnCheckPassOrFail(){
        this.isAllPass=this.marks.every((v)=>{
            return v>250
        })
    }

}

var o=new Student();
console.log(o.getBelow500Makrs())
o.fnCheckPassOrFail();
console.log(o.isAllPass);