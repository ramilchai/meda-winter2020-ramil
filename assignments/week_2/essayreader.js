// loads up the Node FS Module, so it can be used in this script.
const fs = require("fs");

// process.argv has the command line information that was used to run this script.

let argument = process.argv;

let fileName = argument[2];

const fileExist = fs.existsSync(fileName);

if (fileExist === false) {
    console.log("Sorry, the file doesn't exist!");
    return;
}

let fileContents = fs.readFileSync(fileName, "utf-8");



//For counting charracters
let contentArray = fileContents.split("");

let count = 0;
for (let i = 0; i < contentArray.length; i++) {
    if (contentArray[i] === " " || contentArray[i] === "," || contentArray[i] === "." || contentArray[i] === "?" || contentArray[i] === "!" ) {
        continue;
    } else {
        count += 1;
    }
}

console.log(`The letters are ${count}`);
//End

//For counting words
let wordArray = fileContents.split(" ");

console.log(`The letters are ${wordArray.length}`);
//End

//For counting sentences 
let sentenceCount = 0;

for (let i = 0; i < contentArray.length; i++) {
    if (contentArray[i] === "." || contentArray[i] === "!" || contentArray[i] === "?") {
        sentenceCount++;
    }
}

console.log(`The sentences are ${sentenceCount}`);