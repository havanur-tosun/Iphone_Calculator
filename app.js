const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");

// hourEl.textContent = "10";



const updateTime = () => {
    const currentTime = new Date();

    let currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    if(currentHour > 12) {
        currentHour -= 12;
    }

    hourEl.textContent = currentHour.toString();
    minuteEl.textContent = currentMinute.toString().padStart(2, "0");
}
setInterval(updateTime, 1000);
updateTime();