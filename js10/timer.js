const start = document.getElementById("start");
const stop = document.getElementById("stop");
const timer = document.getElementById("timer");
const startAg = document.getElementById("start_again");

let i = 0;
let timerId;

//let testas = () => {
//    console.log("labas" + ++i);
//}
let kasSekunde = () => {
    console.log(timer.value.split(":"));
    total = Number(min) * 60 + Number(sec);
    total--;
    min = Math.floor(total / 60);
    sec = total % 60;
    timer.value = `${min} : ${String(sec).padStart(2, '0')}`;
    if (total == 0) {
        clearInterval(timerId);
    }
}

let startTimer = () => {
    setTimeout(testas, 3000); //iskviecia viena karta.
    setInterval(testas, 1000); // iskviecia nuolatos, kol nesustabdai.

    timerId = setInterval(kasSekunde, 1000);
}

let stopTimer = () => {
    clearInterval(timerId);
}


start.onclick = startTimer;
stop.onclick = stopTimer;
starAg.onclick = start_again;
