"use strict";

const airplane = document.querySelector(".airplane");
const man = document.querySelector(".man");

let active = false;
let countA = 0;
let countM = 152;
let idInterval;
man.style.top = 152 + "px";

const availableScreenWidth = window.innerWidth - 500;
const availableScreenHeight = window.innerHeight - 380;

const flyAnimate = () => {
    countA++;
    countM++;
    console.log(countA, countM);

    man.style.position = "absolute";
    airplane.style.position = "absolute";

    idInterval = requestAnimationFrame(flyAnimate);

    if (countA < availableScreenHeight) {
        man.style.top = countM + "px";
        airplane.style.left = countA + "px";
    } else if (countA < availableScreenWidth) {
        airplane.style.left = countA + "px";
    } else {
        cancelAnimationFrame(idInterval);
    }
};

let timerId = setInterval(flyAnimate, 1000);

document.addEventListener("click", () => {
    if (active) {
        cancelAnimationFrame(idInterval);
        active = false;
    } else {
        idInterval = requestAnimationFrame(flyAnimate);
        active = true;
    }
});

console.log(airplane);
console.log(man);
console.log(availableScreenWidth);
console.log(availableScreenHeight);