/*
let temp=[5, 6, 2, 3, 4,6, 7];


let suma=0;
let kiekis=0;
temp.forEach( (x)=>{
  suma+=x;
  kiekis++;
});
console.log(`Vidurkis: ${suma/kiekis} `);
*/



/*
mas.forEach((x, i)=>{
    console.log(`${i} => ${x} `);
});

*/

/*
let men=[[1,2,3,4,1,3,4], [3,5,6,7,2,6,7], [3,2,4,5,6,7,8]];

let suma=0;
let kiekis=0;
men.forEach( (sav)=>{
    let savSuma=0;
    let savKiekis=0;
    sav.forEach((diena)=>{
        savSuma+=diena;
        savKiekis++;
    });
    suma+=savSuma;
    kiekis+=savKiekis;
    console.log(`Savaites vidurkis: ${savSuma / savKiekis}`);
});

console.log(` ${suma / kiekis}`);
*/

//
let mas = [5, 3, 6];
mas.push(5);
mas[6] = 8 //(mas- sestas elementas lygus 8) logina [5,3,6,5,<2empty items>,8] 
console.log(mas);

//
let mas = [5, 3, 6];
let c = mas;
//c = [5, 3, 6]
//mas = [5, 3, 6]

//
let mas = [];
for (let i = 1; i < 10; i++) {
    mas.push(i);
}
console.log(mas); //logina 123..9 skaicius, ne supusinti i masyva. 


mas.forEach((x) => {
    console.log(x);
})

//forEach f-ja:
mas.forEach()

function name(x) {
    console.log(x);
}

//rodykles f-ja:
let suma = (y, x) => {
    console.log(x + y);
}
suma(5, 6);

//