const prompt = require("prompt-sync")();

const a = prompt("Enter First Integer");
const b = prompt("Enter Second Integer");
const c = prompt("Enter Third Integer");

const result1 = a % 10; 
const result2 = b % 10;
const result3 = c % 10;

if(result1 == result2 && result1 == result3){
    console.log("Last digits are same");
}
else{
    console.log("Last digits are not same");
}