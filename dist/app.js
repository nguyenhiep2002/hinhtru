class Hinhtron {
    constructor(bankinh) {
        this.PI = 3.14;
        this.dienTich = () => {
            return this.PI * this.bankinh * this.bankinh;
        };
        this.chuvi = () => {
            return this.PI * this.bankinh * 2;
        };
        this.bankinh = bankinh;
    }
}
class Hinhtru extends Hinhtron {
    constructor(chieucao, bankinh) {
        super(bankinh);
        this.thetich = () => {
            // super.dienTich();
            return this.dienTich() * this.chieucao;
        };
        this.chieucao = chieucao;
    }
}
var hien = new Hinhtru(4, 3);
console.log(hien.thetich());
