//klases (brezinio) aprasymas:
class Preke {
    kaina = 0;
    kainaSuPVM = 0;
    pavadinimas = "";

    constructor(kaina, pavadinimas) {
        //pradiniu reiksmiu priskyrimas:
        this.kaina = kaina;
        this.pavadinimas = pavadinimas;

        //skaiciavimai ir programinis kodas kuris vykdomas kiekvieno objekto sukurimo metu:
        this.kainaSuPVM = this.kaina * 1.21;

    }
}

//nauju objektu sukurimas:
const tv = new Preke(100, "Televizorius");
const pc = new Preke(600, "Kompiuteris");

tv.kaina = 100;
tv.kainaSuPVM = tv.kaina * 1.21;
pc.kaina = 600;
pc.kainaSuPVM = pc.kaina * 1.21;

console.log(tv); //->Preke { kaina: 100, kainaSuPVM: 121, pavadinimas: 'Televizorius' }
console.log(pc); //->Preke { kaina: 600, kainaSuPVM: 726, pavadinimas: 'Kompiuteris' }