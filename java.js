let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let dayElement = document.getElementById("day");
let dateElement = document.getElementById("date");
let monthElement = document.getElementById("month");

setInterval(() => {
    let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours() <10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes() <10?"0":"") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds() <10?"0":"") + currentTime.getSeconds();

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let day = days[currentTime.getDay()];
    let date = currentTime.getDate();
    let month = months[currentTime.getMonth()];

    // Update the DOM elements
    dayElement.textContent = day;
    dateElement.textContent = (date < 10 ? "0" : "") + date;
    monthElement.textContent = month;
    yearElement.textContent = year;
}, 1000);