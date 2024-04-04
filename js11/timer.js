const start = document.getElementById("start");
const stop = document.getElementById("stop");
const timer = document.getElementById("timer");
const startAg = document.getElementById("start_again");
const alertDiv = document.getElementById("alert");

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
        blinkId = setInterval(blink, 250);
        mazejimoId = setInterval(sumazek, 30);
    }
}

let blinkTimes = 10;

//mirksi kai biagiasi laikas
const blink = () => {
    if () {
        alertDiv.classList.contains("alert-secondary");
        alertDiv.classList.remove("alert-secondary");
        alertDiv.classList.add("alert-danger");
    } else {
        alertDiv.classList.remove("alert-danger");
        alertDiv.classList.add("alert-secondary");
    }
    blinkTimes--;
    if (blinkTimes == 0) {
        clearInterval(blinkId);
        blinkTimes = 10;
    }

    let timerioSpalva = 255;
    const sumazek = () => {
        pradinisAukstis--;
        timer.style.backgroundColor = `rgb (255 ${timerioSpalva}, ${timerioSpalva})`;
        if (timerioSpalva == 0) {
            clearInterval(mazejimoId);
        }

    }


    let startTimer = () => {
        setTimeout(testas, 3000); //iskviecia viena karta.
        setInterval(testas, 1000); // iskviecia nuolatos, kol nesustabdai.

        timerId = setInterval(kasSekunde, 1000);
    }

    let stopTimer = () => {
        clearInterval(timerId);
        clearInterval(blinkId);
    }


    start.onclick = startTimer;
    stop.onclick = stopTimer;
    starAg.onclick = start_again;
