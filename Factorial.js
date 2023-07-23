const prompt = require("prompt-sync")();
const number = prompt("Enter the Number");
if(number<0){
    console.log("Factorial not exist");
}
else if(number == 0){
    console.log("Factorial is 1");
}
else{
    let fact = 1;
    for(i =1; i<=number; i++)
    fact *=i;
    console.log(fact)
}