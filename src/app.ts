class Hinhtron{

    bankinh: number;
    PI: number =3.14;
  
    constructor(bankinh:number){
      
        this.bankinh = bankinh;
      
    }
    dienTich= () =>{
        return this.PI * this.bankinh * this.bankinh;
    }
    chuvi =()=>{
        return this.PI * this.bankinh *2 ;
    }
}
class Hinhtru extends Hinhtron{
    chieucao: number;
    constructor(chieucao:number, bankinh:number){
        super(bankinh);
        this.chieucao = chieucao;
    }
    thetich=()=>{
        // super.dienTich();
        return this.dienTich() * this.chieucao;
    }

}
var hien= new Hinhtru(4,3);
console.log(hien.thetich());