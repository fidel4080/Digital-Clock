//DIGITAL CLOCK

function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM"
    hours = hours % 12 || 12; //Convert 24-hour time to 12-hour time, and if the result is 0, show 12 instead.
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = (`${hours}:${minutes}:${seconds} ${meridiem}`);
    document.getElementById("clock").textContent = timeString;

}

updateClock();
setInterval(updateClock, 1000);