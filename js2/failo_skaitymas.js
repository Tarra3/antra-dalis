const fs = require("fs");

let data = fs.readFileSync(process.argv[2]).toString().split("\r\n"); //.map(Number);

//let suma=0;
let line = 0;
let mas = [];
data.forEach((d) => {
    console.log(typeof d);
    mas[line] = [];
    d.split(" ").forEach((x) => {
        mas[line].push(x);
    });
    line++;

});

console.log(mas);

mas.forEach((line) => {
    let out = "";
    line.forEach((element) => {
        out += element + " ";
    });
    console.log(out);
});