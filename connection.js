let startTime;
let elapsedTime = 0;
let timerInterval;
let lapCount = 1;

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
}

function pause() {
    clearInterval(timerInterval);
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    lapCount = 1;
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function lap() {
    if (!timerInterval) return;
    const lapTime = document.getElementById("display").textContent;
    const li = document.createElement("li");
    li.textContent = "Lap " + lapCount++ + ": " + lapTime;
    document.getElementById("laps").appendChild(li);
}

function updateTime() {
    elapsedTime = Date.now() - startTime;

    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / 60000) % 60);

    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    document.getElementById("display").textContent =
        `${minutes}:${seconds}:${milliseconds}`;
}
