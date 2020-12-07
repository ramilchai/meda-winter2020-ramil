const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// setting up the Database
const dbCredentials = "mongodb+srv://todoUser:todoUser@cluster0.wj7tj.mongodb.net/todoApp?retryWrites=true&w=majority";
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