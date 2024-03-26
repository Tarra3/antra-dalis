const svorisInput = document.getElementById("svoris");
const ugisInput = document.getElementById("ugis");
const btn = document.getElementById("btn");
const rez = document.getElementById("rez");

const skaiciuoti = () => {
    const svoris = svorisInput.valueAsNumber;
    const ugis = ugisInput.valueAsNumber;
    const kmi = (svoris / (ugis ** 2));
    rez.innerHTML = `KMI: ${Math.round(kmi)}`;
}
btn.onclick = skaiciuoti;




//KMI = Kūno masė(kg) / Ūgis(m) ** 2
