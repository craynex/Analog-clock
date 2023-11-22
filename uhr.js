/**
 * Programm shows a working analoge clock :)
 * Author: Cristian Martin
 */

// Variables for the hands
let hr = document.querySelector(".hour-hand");
let min = document.querySelector(".min-hand");
let sec = document.querySelector(".second-hand");

// Calls the current time
function displayTime() {
  var jetzt = new Date();

  var hh = jetzt.getHours();
  var mm = jetzt.getMinutes();
  var ss = jetzt.getSeconds();

// Calculations for the correct rotation for the hands
  var hRotation = 30 * hh + mm / 2;
  var mRotation = 6 * mm;
  var sRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

// Calls the function to get the current time
displayTime();

// Update the time every second (the 1000 stands for 1000 milliseconds)
setInterval(displayTime, 1000);

// Code for the numbers on the edge of the clock
function addClockNumbers() {
  let clockFace = document.querySelector(".inner-clock-face");
  for (let i = 1; i <= 12; i++) {
    let number = document.createElement("div");
    number.className = "clock-number";
    number.innerHTML = i;
    clockFace.appendChild(number);
    let angle = (i - 0) * 30; // Calculates the angle for placing the numbers
    number.style.transform = `rotate(${angle}deg) translate(-10%, -420%)`;
  }
}

// Calls the function to add the clock numbers
addClockNumbers();
