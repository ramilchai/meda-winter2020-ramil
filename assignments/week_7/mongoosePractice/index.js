const mongoose = require("mongoose");

const db = "mongodb+srv://mongoosePracticeUser:mongoosePracticeUser@cluster0.wj7tj.mongodb.net/genericDatabase?retryWrites=true&w=majority";

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
    accountClosed: Boolean, 

});

let exampleModel = new mongoose.model("collectionnames", exampleSchema);

let exampleDocument = new exampleModel({
    username: "Peter",
    password: "1234578",
    created: "Dec 02, 2020",
    age: 46,
    accountClosed: false
});

exampleDocument.save((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Document saved!");     
    }

    mongoose.connection.close();
    console.log("connection closed!")
});

