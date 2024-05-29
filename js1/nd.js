// 1 trikampis:
let a = Number(process.argv[2]);
let b = Number(process.argv[3]);
let c = Number(process.argv[4]);

let s = (a + b + c) / 2;
let plotas = (s * (s - a) * (s - b) * (s * c)) ** 0.5;
console.log.Math.sqrt(plotas);

// 4 armstrongo sk.

let arm = 100;
for (let i = 100; i < 999; i++) {
    let nA = String(i).split("").map((num) => {
        return Number(num)
    });
    arm2 = (Number(nA[0]) ** 3 + Number(nA[1]) ** 3 + Number(nA[2]) ** 3);
    arm2 === i ? console.log(`Armstrongo skaicius` + i) : false;
};

//2 olimpiniai metai
