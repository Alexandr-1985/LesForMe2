"use strict";

const airplane = document.querySelector(".airplane");
const man = document.querySelector(".man");

let active = false;
let count = 0;
let idInterval;
let clientX = 0;
let clientY = 0;

//document.elementFromPoint(clientX, clientY).createElement({
man.element.style = {
    top: 152 + "px",
    left: 0 + "px",
};
//});

const availableScreenWidth = window.innerWidth - 520;
const availableScreenHeight = window.innerHeight - 220;

const flyAnimate = () => {
    count++;
    console.log(count);

    man.style.position = "absolute";
    airplane.style.position = "absolute";

    idInterval = requestAnimationFrame(flyAnimate);

    if (count < availableScreenWidth && count < availableScreenHeight) {
        man.style.top = count + "px";
        airplane.style.left = count * 2 + "px";
    } else if (count < availableScreenHeight) {
        airplane.style.left = count * 2 + "px";
    } else {
        cancelAnimationFrame(idInterval);
    }
};

//let timerId = setInterval(flyAnimate, 1000);

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