
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minetsEl = document.getElementById('minets');
const secondEl = document.getElementById('second');



const newYears = "1 Jan 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minets = Math.floor(totalSeconds / 60) % 60;
    const second = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minetsEl.innerHTML = formatTime(minets);
    secondEl.innerHTML = formatTime(second);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown ();

setInterval(countdown, 1000);