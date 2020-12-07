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
    accountClosed: Boolean, 

});

let exampleModel = new mongoose.model("collectionnames", exampleSchema);

let exampleDocument = new exampleModel({
    username: arguments[2],
    password: arguments[3],
    created: Date.now(),
    age: arguments[4],
    accountClosed: true
});

exampleDocument.save((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Document saved!");     
    }

    
});

// let secondDocument = new exampleModel({
//     username: "Alex",
//     created: "Dec 3, 2020", 
//     age: 24,
//     accountClosed: true,
//     nickname: "Alex"
// })

// secondDocument.save((error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("saved!");     
//     }
// })

// setTimeout(() => {
//     mongoose.connection.close();
//     console.log("connection closed!")
// }, 5000);