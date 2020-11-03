// loads up the Node FS Module, so it can be used in this script.
const fs = require("fs");

const timeNow = new Date(Date.now());

// process.argv has the command line information that was used to run this script.

let argument = process.argv;

// check if we have an existing file called "history.txt"

let history = "";
if (fs.existsSync("history.txt")) {
    // .. if it does find, read it and load it into the variable history.
    // history read all file is already exist in the file.
    history = fs.readFileSync("history.txt", "utf-8");
} else {
    // .. if it doesn't, we create the file, and write an empty to it.
    fs.writeFileSync("history.txt", "", "utf-8");
}



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

let firstSentence = `The letters are ${count}.`;
console.log(firstSentence);
//End

//History log begins 
history = `${history}${fileName} ${timeNow.toDateString()} ${timeNow.toTimeString()} \n`;

history += firstSentence + "\n";

//For counting words
let wordArray = fileContents.split(" ");

let secondSentence = `The letters are ${wordArray.length}.`;
console.log(secondSentence);

history = history + secondSentence + "\n";
//End

//For counting sentences 
let sentenceCount = 0;

for (let i = 0; i < contentArray.length; i++) {
    if (contentArray[i] === "." || contentArray[i] === "!" || contentArray[i] === "?") {
        sentenceCount++;
    }
}

let thirdSentence = `The sentences are ${sentenceCount}.`;

console.log(thirdSentence);

history = history + thirdSentence + "\n\n";

//Save the string in the history variable to the file.
console.log("Everything saved to history");

fs.writeFileSync("history.txt", history, "utf-8");