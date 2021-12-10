"use strict";

let date = new Date();

console.log(date);

date.setFullYear(1987, 9, 27);
date.setMonth(9, 22);
date.setDate(22);
date.setDate(date.setDate() + 100);
date.setHours(3, 22, 22, 300);

//let date = new Date(0);
//let date = new Date(2546876513);
console.log(date.setTime()); //times tamp
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleDateString()); //'en' , 'ru'
console.log(date.toLocaleTimeString()); //'en' , 'ru'

console.log(date.toISOString("en"));
console.log(date.toISOString("en").substr(0, 10));

console.log(Date.now());
console.log(Date.parse("22 october 1987"));

/*let date = new Date(1987, 9, 22, 3, 10, 02, 200);
console.log('Год' + date.getFullYear());
console.log("Месяц" + date.getMonth() + 1);
console.log("Число месяца" + date.getDate());
console.log("Число недели" + date.getDay());

console.log("Часы" + date.getHours());
console.log("Минуты" + date.getMinutes());
console.log("Секунды" + date.getSeconds());
console.log("Милисекунды" + date.getMilliseconds());*/