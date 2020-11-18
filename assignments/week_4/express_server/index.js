//Bring in the express package.
const express = require("express");

//Run a copy of the express package.
const app = express();

//Connects our HTTP server with the Express web module. 
const http = require("http").Server(app);

//Decide on the port number to listen on when running Express server.
//Do not use 80, 443, 20, 21, 22, etc.
const port = 3000;


//Tell http module that we will be listening on the number in the port variable.
http.listen(port);

console.log("Express server is now running on " + port);

//Tell express to load the file public_html folder when someone requests / or nothing.
app.use("/", express.static("public_html/")); 


app.post("/sayHello", (request, response) => {
    console.log("Someone said hello!");

    let responseObject = {};

    response.send(responseObject);
});