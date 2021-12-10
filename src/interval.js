"use strict";

const airplane = document.querySelector(".airplane");
const man = document.querySelector(".man");

let count = 0;
let idInterval;
const flyAnimate = () => {
    count++;
    console.log(count);

    if (count < 200) {
        man.style.top = count + "px";
        airplane.style.top = count * 3 + "px";
    } else if (count < 500) {
        airplane.style.left = count * 3 + "px";
    } else {
        clearInterval(idInterval);
    }
};

idInterval = setInterval(flyAnimate, 10);