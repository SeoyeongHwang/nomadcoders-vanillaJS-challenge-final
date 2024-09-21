// 실시간 시계
const clock = document.querySelector("#time-area span");

function getClock() {
    const date = new Date();
    let hourPeriod = "AM";
    let hours = date.getHours;
    if (date.getHours() > 12) {
        hours = String(date.getHours() - 12).padStart(2, "0");
        hourPeriod = "PM";
    } else {
        hours = String(date.getHours()).padStart(2, "0");
    }
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours} : ${minutes} ${hourPeriod}`;
}
getClock();
setInterval(getClock, 1000);