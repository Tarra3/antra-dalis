// reikia masyvo sudaryto is objekto
let prekes = [];

let pav = "duona";
let kiek = "2 vnt.";

prekes.push({
    pavadinimas: pav,
    kiekis: kiek
});

pav = "cukrus";
kiek = "1 pakelis";

prekes.push({
    pavadinimas: pav,
    kiekis: kiek
});

console.log(prekes);

//norint atvaizduoti irasa

/* t -> yra kintamasis -> tekstas o reikia objekto
tasks.forEach((t) => {
       ... viskas kas buvo tiap pat iki cia
        newTask.textContent = `${t.pavadinimas} ${t.kiekis}`;
       ... viskas kas po to eina taip pat lieka
              
    });

*/