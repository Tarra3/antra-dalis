class Preke2 {
    #kaina = 0;
    pavadinimas = "";

    constructor(kaina, pavadinimas) {
        //pradiniu reiksmiu sukurimas:
        this.#kaina = kaina;
        this.pavadinimas = pavadinimas;

    }
    //metodas arba f-ja kuri yra klaseje:
    isvesti() {
        return `Prekes pavadinimas: ${this.pavadinimas}, kaina: ${this.#kaina} EUR`;
    }

    //getter graziname kaina su PVM:
    get kainaSuPVM() {
        return this.#kaina * 1.21;
    }
    // setteris -priskyrejas. 
    set kaina(kaina2) {
        if (kaina2 - this.#kaina < 10) { //pakeis 38eilute tik jei skirtumas iki 10
            this.#kaina = kaina2;
        }

    }
    //metodas geteris - pasiimti kintamuosius
    get kaina() {
        return this.#kaina;
    }
}


const tv = new Preke2(100, "Televizorius");
const pc = new Preke2(600, "Kompiuteris");

console.log(tv.isvesti()); //-> Prekes pavadinimas: Televizorius, kaina: 100 EUR, 121
console.log(tv.kainaSuPVM); //-> 121
tv.kaina = 105;
console.log(tv.isvesti());//->Prekes pavadinimas: Televizorius, kaina: 200 EUR
console.log(pc.isvesti()); //-> Prekes pavadinimas: Kompiuteris, kaina: 600 EUR, 726

let kainuSuma = tv.kainaSuPVM + pc.kainaSuPVM;
console.log(kainuSuma); //-> 847 (kai pakelem kaina iki 200 - suma 968 logina)
console.log(tv.kaina); /->105
