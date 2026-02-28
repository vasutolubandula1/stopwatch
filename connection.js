let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;
let lapCount = 0;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const lapsList = document.getElementById("lapsList");

function updateDisplay() {
    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;
    const ms =
        milliseconds < 10 ? "00" + milliseconds :
        milliseconds < 100 ? "0" + milliseconds :
        milliseconds;

    display.textContent = `${h} : ${m} : ${s} : ${ms}`;
}

function startStopwatch() {
    if (timer !== null) return;

    timer = setInterval(() => {
        milliseconds += 10;

        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();
    }, 10);
}

function pauseStopwatch() {
    clearInterval(timer);
    timer = null;
}

function resetStopwatch() {
    clearInterval(timer);
    timer = null;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    lapCount = 0;

    lapsList.innerHTML = "";
    updateDisplay();
}

function addLap() {
    if (timer === null) return;

    lapCount++;
    const lapTime = display.textContent;

    const li = document.createElement("li");
    li.textContent = `Lap ${lapCount} — ${lapTime}`;
    lapsList.prepend(li);
}

startBtn.addEventListener("click", startStopwatch);
pauseBtn.addEventListener("click", pauseStopwatch);
resetBtn.addEventListener("click", resetStopwatch);
lapBtn.addEventListener("click", addLap);