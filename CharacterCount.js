const prompt = require("prompt-sync")();

function countString(str,letter){
    let count = 0;
    for(i=0; i<=str.length; i++){
        if(str.charAt(i)==letter){
        count += 1;
    }
}
return count;
}


const string = prompt("Enter the string");
const letterToCheck = prompt("Enter the letter");

const result = countString(string,letterToCheck);
console.log(result);