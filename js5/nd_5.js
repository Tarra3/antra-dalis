class Trupmenos {
    sveikojiD = 0;
    skaitiklis = 0;
    daliklis = 0;
    constructor(sveikojiD, skaitiklis, daliklis) {
        this.sveikojiD = sveikojiD;
        this.skaitiklis = skaitiklis;
        this.daliklis = daliklis;
    }
    set sveikojiD(sveikojiD) {
        this.sveikojiD = sveikojiD;
    }
    get sveikojiD() {
        return this.sveikojiD;
    }

    set skaitiklis(skaitiklis) {
        this.skaitiklis = skaitiklis;
    }
    get skaitiklis() {
        return this.skaitiklis;
    }

    set daliklis(daliklis) {
        this.daliklis = daliklis;
    }
    get daliklis() {
        return this.daliklis;
    }

    toString() {
        return String(`${this.sveikojiD} ${this.skaitiklis}/${this.daliklis}`);
    }

}


const sveikojiD = 3;
const skaitiklis = 1;
const daliklis = 3;
const trup = `${sveikojiD} ${skaitiklis}/${daliklis}`;
console.log(trup); //-> 3 1/3
const sveikojiD1 = 3;
const skaitiklis1 = 1;
const daliklis1 = 3;

const pridet = `${sveikojiD + sveikojiD1} ${skaitiklis + skaitiklis1}/${daliklis + daliklis1}`
console.log(pridet); //-> 6 2/6 

const realusSk = `${sveikojiD + (skaitiklis / daliklis)}`;
console.log(realusSk); //-> 3.3333333333333335
