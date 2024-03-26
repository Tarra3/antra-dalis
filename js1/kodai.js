
const fs = require(`fs`);
let str = fs.readFileSync("studentai.json").toString()
//console.log(data);
let studentas = JSON.parse(str);
console.log(studentas);

studentas.forEach((student) => {
    let suma = 0;
    student.pazymiai.forEach((pazymys) => {
        suma += pazymys;
        vidurkis = suma / pazymiai.length
    })
    console.log(suma, vidurkis);
})