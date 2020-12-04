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

exampleModel.findByIdAndUpdate("5fca76fc99e38b406c62106f", {age: 31}, (error, results) => {
    if (error) {
        console.log("There was an error.", error);
    } else {
        console.log("Document was updated! This is the original document: ", results);
    }
});