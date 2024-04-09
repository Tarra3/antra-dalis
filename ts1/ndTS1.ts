
class Trikampis{
       public  sideA:number;
       public  sideB:number;
       public  sideC:number;
    

 constructor(sideA: number, sideB: number, sideC: number) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
}
Trikampis.prototype.canFormTriangle = function() {
    return this.sideA + this.sideB > this.sideC &&
           this.sideB + this.sideC > this.sideA &&
           this.sideA + this.sideC > this.sideB;
}

Trikampis.prototype.toString = function() {
    if (this.canFormTriangle()) {
        return `Trikampis ${this.sideA}, ${this.sideB}, ${this.sideC}`;
    } else {
        return "Trikampis nesusidaro";
    }
}

const trik = new Trikampis(6, 4, 3);
console.log(trik.toString()); 


Trikampis.prototype.getPerimeter = function() {
    if (this.canFormTriangle()) {
        return this.sideA + this.sideB + this.sideC;
    
    }
}
const trik1 = new Trikampis(3, 4, 5);
console.log("Perimeter:", trik1.getPerimeter());
