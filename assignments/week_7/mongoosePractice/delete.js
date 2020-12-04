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

exampleModel.findByIdAndDelete("5fca8dab0320ef1d7078a5b5", (error, results) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Successfully deleted the following document from the database: ", results);
    }
})