const clock = document.querySelector("#clock");

function getClock() {
    // recreate date object every second
    const date = new Date();

    // pad the numbers if applicable
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// show time without 1 second delay
getClock();
// update time every second 
setInterval(getClock, 1000);