class Player{
   
    getPlayerInfo(name:string,runs:number):string{
        return 'this is '+ name + ' My runs ' +runs;
    }
}

var o=new Player()
o.getPlayerInfo('sachin',2000)

