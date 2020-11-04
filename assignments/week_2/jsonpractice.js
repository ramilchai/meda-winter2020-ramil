//Rule 1: All keys must be in quotes.
//Rule 2: No functions allowed
//Rule 3: Only one "object"
//Rule 4: No comments

const { Console } = require("console");
const fs = require("fs");

const fileExists = fs.existsSync("example.json");

let contents;

if (fileExists) {
    contents = fs.readFileSync("example.json", "utf-8");

} else {
    console.log("File doesn't exist. Quitting")
    return;
}

//Everything coming in Js is read as string!!
let contentsObject = JSON.parse(contents);

console.log(contents);
console.log(contentsObject);

const myObject = {
    "lastName" : "Doe",
    "ability"  : function() {console.log(this.lastName + " is eating food.")},
    possesion : ["car", "house", "refrgerator"],
    deceased : false,
    age : 45,
    "is fun" : false,
    lastUpdate: "11/4/2020",
    lastUpdateObject : new Date(Date.now())
};

let jsonObjectConverted = JSON.stringify(myObject);

console.log(jsonObjectConverted);

fs.writeFileSync("savedJSON.json", jsonObjectConverted, "utf-8");