//Bring in the express package.
const express = require("express");

const fs = require("fs");

let history = {
    submissions: []
};

if (fs.existsSync("history.json")) {
    let string = fs.readFileSync("history.json", "utf-8");
    history = JSON.parse(string);
    console.log("History file found and loaded");
} else {
    let json = JSON.stringify(history);
    fs.writeFileSync("history.json", json, "utf-8");
    console.log("History file not found! Creating a new one.");
}

const bodyParser = require("body-parser");

//Run a copy of the express package.
const app = express();

//Connects our HTTP server with the Express web module. 
const http = require("http").Server(app);

//Decide on the port number to listen on when running Express server.
//Do not use 80, 443, 20, 21, 22, etc.
const port = 3000;


//Tell http module that we will be listening on the number in the port variable.
http.listen(port);

//Body parser so we can automatically convert request objects.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Express server is now running on " + port);

//Tell express to load the file public_html folder when someone requests / or nothing.
app.use("/", express.static("public_html/")); 


app.post("/sayHello", (request, response) => {
    console.log("Someone said hello!");

    let winningNumber = Math.floor((Math.random() * 10) + 1);

    console.log(winningNumber);


    let dataFromFront = request.body;

    let userNumberChoice = parseInt(dataFromFront.number);

    let historyEntry = {
        number: userNumberChoice, 
        winningNumber: winningNumber,
        timeStamp: Date.now()
    };

    history.submissions.push(historyEntry);

    fs.writeFileSync("history.json", JSON.stringify(history), "utf-8");

    let userWinner = false;
    let outOfRange = false;

    if (winningNumber === userNumberChoice) {
        userWinner = true;
    }

    if (userNumberChoice <= 0 || userNumberChoice >= 11) {
        outOfRange = true;
    }
    let responseObject = {
        results : userWinner,
        error   : outOfRange
    };

    response.send(responseObject);
});

app.post("/getPreviousEntries", (req, res) => {
    let dataToSendBack = {
        latestEntries: history.submissions
    }

    res.send(dataToSendBack);
});