const prompt = require("prompt-sync")();

let a = prompt("Enter the value of a");
let b = prompt("Enter the value of b");

let  temp;

temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);


const z = Math.random();
console.log(z)