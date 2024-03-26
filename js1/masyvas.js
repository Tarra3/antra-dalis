const mas = [
    [1, 2, 3, 5]
    [5, 4, 4, 7]
    [3, 2, 1, 9]
    [2, 3, 4, 5]
];


for (let i = 0; i < 4; i++) {
    let s = "";
    for (let y = 0; y < 4; y++) {
        s += `${mas[i][y]}`;
    }
    console.log(s);
}

console.log(`***************`);
for (let i = 0; i < 4; i++) {
    let s = "";
    for (let y = 0; y < 4; y++) {
        s += `${mas[y][i]}`;
    }
    console.log(s);
}

