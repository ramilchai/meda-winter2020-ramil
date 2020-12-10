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

// setting up Schema for database storing 
let todoSchema = new mongoose.Schema({
    title: String,
    text: String,
    completed: Boolean,
    archived: Boolean,
    priority: Number,
    timestamp: Number
});

let todoModel = new mongoose.model("notecollections", todoSchema);

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
    
    let newNoteDocument = new todoModel({
        title: note.title,
        text: note.text,
        completed: (note.completed === "true"),
        archived: (note.archived === "true"),
        priority: parseInt(note.priority),
        timestamp: parseInt(note.timestamp)
    });

    newNoteDocument.save((error) => {
        
        const resObject = {
            saved: true,
            error: null
        };
        
        if(error) {
            res.send(resObject);
        } else {
            resObject.saved = true;
            res.send(resObject);
        }
    });
});

app.post("/getList", (req, res) => {
    todoModel.find({}, (error, results) => {

        const resObject = {
            list: results,
            error: null
        };

        if (error) {
            console.log("failed to read database.")
        } else {
            res.send(resObject);
        }
    });
});