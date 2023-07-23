const prompt = require("prompt-sync")();
const number = prompt("Enter the Number");
for(i=1; i<=10; i++){
    const result = i*number
    console.log(result)
}