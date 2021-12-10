"use strict";

let active = false;
let idTimeout;

document.addEventListener("click", () => {
    /*if(active){
      active = false;
    }else {
      active = true;
    } */
    active = !active;

    logger("setTimeout");
});

const logger = (str) => {
    if (active) {
        console.log(`Hi, im ${str}`);
        idTimeout = setTimeout(() => {
            logger("setTimeout");
        }, 500);
    } else {
        clearTimeout(idTimeout);
    }
};