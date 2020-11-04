const fs = require("fs");

let contents = fs.readFileSync("small.txt", "utf-8");

fs.writeFileSync("small.txt", "this is some text", "utf-8"); //write file, new file

fs.appendFileSync("small.txt", "this is some text", "utf-8"); // adds to the end of the file

fs.existsSync("small.txt"); // check if the file exists in the folder

fs.readFile("small.txt", "utf-8", (err, text) => {
    console.log("done!", text);
}); //Asynchronous version