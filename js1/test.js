/* kurie kintamieji uzrasyti neteisingai?
Mano_Kintamasis_
$211
-211$ = prasideda skaiciumi;
-Naujas Kintamasis = tarpas netinka;
-Mano-Kintamasis = minuso zenklas blogai;
-Dar_Vienas;Kintamasis = kabliataskis negerai;
$Kintamasis_1
$Kintamasis_dvidesimt_du$
$_$KIntamasis$_$
0_0
*kabliataskis, minusas, tarpas,
*/

// log(x+y+" - suma") ->  15 - suma  (jei x=5,y-10)
// log("suma: " +x+y) -> 510 (nes tampa stringu del '+' zenklo pries x)
// log("suma: " +(x+y).toFixed(2)) -> 15 .toFixed(2) palieka po kablelio du sk.


/*
nuskaitykIsAPI(() => {
    y = duomenysIsAPI; //arba y = 8;
});
console.log(y);
asinchroninis -pirma vykdo log, tada f-ja;
*/

// ProcessingInstruction.argv  //- argumentai saugomi console.log(process.argv);
/*let x = process.argv[2];
let y = process.argv[3];

let suma = x + y;
console.log(suma); //-> 56, nes mato kaip stringa.(teksta) padavus 5 6 i terminala
*/
//arba
let x = Number(process.argv[2]);
let y = Number(process.argv[3]);
let suma = x + y;
console.log(suma); //-> 11 logina padavus 5 6 i terminala

