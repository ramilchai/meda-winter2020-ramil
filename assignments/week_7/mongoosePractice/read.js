const mongoose = require("mongoose");

const db = "mongodb+srv://mongoosePracticeUser:mongoosePracticeUser@cluster0.wj7tj.mongodb.net/genericDatabase?retryWrites=true&w=majority";

const arguments = process.argv;

mongoose.connect(db, {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true}, (error) => {

    if(error) {
        console.log("There was an error!", error);
    } else {
        console.log("Successfully connected to MangoDB Database gebericDatabase.")
    }
});

let Schema = mongoose.Schema;

let exampleSchema = new Schema({
    username: String,
    password: String,
    created: String,
    age: Number,
    accountClosed: Boolean
});

let exampleModel = new mongoose.model("collectionnames", exampleSchema);

exampleModel.find({username: "Trent", age: 18}, (error, results) => {
    if (error) {
        console.log("There was an error reading hr database.", error);
    } else {
        console.log("Successfully read the database.");
        console.log("We found something!", results);
    }
});