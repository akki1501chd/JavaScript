const prompt = require("prompt-sync")();

const Base = prompt("Enter the value of Base");
const Height = prompt("Enter the value of Height");

const area = (Base*Height)/2;

console.log(area);