
/*
const info = document.getElementById("info");

setTimeout(() => {
    info.textContent = "puslapis uzkrautas";
}, 2000);
setTimeout(() => {
    info.textContent = "puslapis vygdomas";
}, 4000);
*/

//1.naudojant kintamuosius nelabai efektyvu
//rezultata (promise) patalpiname i kintamaji (objekta)
let fp = fetch(`http://www.boredapi.com/api/activity/`);

//iskvieciam obbjekto metodus
fp.then((response) => {
    console.log("duomenys parsiusti"); //sita dali antra isves
    let jp = response.json(); //json promise
    jp.then((data) => {
        console.log("duomenys pakeisti i objekta");
        console.log(data);
    })
})
console.log("programa baigta"); //pirma isves sita dali


//2. programos kodas panaikinus kintamuosius:
fetch(`http://www.boredapi.com/api/activity/`)
    .then(response)=> {
    response.json()
        .then((data) => {
            console.log("duomenys pakeisti i objekta");
            console.log(data);
        })
}

//3.programos kodas sujungus kelis asinchroninius veiksmus i grandine:
fetch(`http://www.boredapi.com/api/activity/`)
    .then((response) => {
        console.log("duomenys parsiusti");
        return response.json();
    })
    .then((data) => {
        console.log("duomenys pakeisti i objekta");
        console.log(data);
        //info.textContent=data.activity; -< duoda veiksmus ka daryti
    })

console.log("programa baigta");

