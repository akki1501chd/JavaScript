const prompt = require("prompt-sync")();

const a = prompt("Enter The value of a");

if(a>0){
    console.log("Positive");
}

else if(a==0){
    console.log("number is zero");
}

else{
    console.log("Negative");
}