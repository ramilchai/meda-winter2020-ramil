const fs = require("fs");
const process = require("process");

const arg = process.argv;

//1) Check to see if a JSON file exists or not. If it exists, load that JSON file and convert it into an
// object. If it doesn’t, create a JSON file from scratch and creates a new object to work from. You
// are free to decide on the name of the JSON file.

let jsonFridayTheThirteenth = "";
if (fs.existsSync("jsonFridayThethirteenth.json")) {
    jsonFridayTheThirteenth = fs.readFileSync("jsonFridayTheThirteenth.json", "utf-8");
} else {
    fs.writeFileSync("jsonFridayTheThirteenth.json", `{
        "argumentHistory" : []
    }`, "utf-8");
}

let jsonFridayTheThirteenthConverted = JSON.parse(jsonFridayTheThirteenth);


// 2) Check if there was a third argument in the argv() array. If there was, add it to the object that
// holds all history of arguments. If it doesn’t send a message to the terminal saying that there
// was no argument found.

let thirdArg = arg[2];

if (typeof thirdArg === "undefined") {
    console.log("Argument is NOT found!");
    return;
} else {
    jsonFridayTheThirteenthConverted.argumentHistory.push(thirdArg);
}

let jsonFinishing = JSON.stringify(jsonFridayTheThirteenthConverted);

//3) Save the object to the JSON file when the script is ending.

fs.writeFileSync("jsonFridayTheThirteenth.json", jsonFinishing, "utf-8");
console.log(`${thirdArg} has been added to the history file`);