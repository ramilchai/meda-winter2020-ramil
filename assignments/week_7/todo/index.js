const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const credentials = require("./credentials.js")

// setting up the Database
const dbCredentials = credentials.dbURL;
const dbOptions = {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true};
let dbConnection = mongoose.connect(dbCredentials, dbOptions, (error) => {
    if (error) {
        console.log("Mongoose error: " + error);
    } else {
        console.log("MongoDB connection opened.");
    }
});

const port = 3000;

const app = express();
const http = require("http").Server(app);
http.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

console.log("Express server is running on port " + port);

// create routes
app.use("/", express.static("client/"));

app.post("/newNote", (req, res) => {
    const note = req.body;
    
    console.log(note);

    const resObject = {
        saved: true,
        error: null
    }
    res.send(resObject);
});