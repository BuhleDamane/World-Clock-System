let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let currentTime = new Date();

hrs.innerHTML = (currentTime.getHours() <10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes() <10?"0":"") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds() <10?"0":"") + currentTime.getSeconds();
}, 1000);

let ixesha = new Date;
let ixesha = document.querySelector(".ixesha");

let  date = now.getDate();
let day = now.getDay();
let month = now.getMonth();

ixesha.innerHTML = `${day}, ${date} ${month}`