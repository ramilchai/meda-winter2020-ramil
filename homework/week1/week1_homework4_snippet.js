// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    //Create a variable called "product" that is equal the product of 2 arguments: "option" and "option2".
    let product = option * option2;

    //Tell console to show the value of "product" variable.
    console.log(product);

    //Tell console to also show the message, "The value of the option parameter is (a value of "option" variable)".
    console.log("The value of the option parameter is " + option);

    //An if-condition which will hold TRUE if the value of the "option" variable is equal 0 in both value and datatype.
    if (option === 0) {
        
        //When the condition hold, it will return a string, "Everything is good!". 
        return "Everything is good!";
    //If the condition above doesn't hold TRUE, then it will check for another if-condition which will hold TRUE if the value of the "option" variable is equal 1 in both value and datatype.
    } else if (option === 1) {
        
        //When this condition hold, it will return a string, "An error happened!".
        return "An error happened!";
    //If the both conditions above don't hold TRUE, then it will check for the last condition which will hold TRUE if the value of the "option" variable is equal -1 in both value and datatype.
    } else if (option === -1) {
        
        //When this condition hold, it will return a string, "Everything is bad!".
        return "Everything is bad!";
    }

}

//Create an variable called "result" holding the return result from the function "myFunction," whose the first argument is 1 and the second argument is 11.   
let result = myFunction(1, 11);
//Create an variable called "result2" holding the return result from the function "myFunction," whose the first argument is 2 and the second argument is 200. 
let result2 = myFunction(2, 200);

//An if-condition which will hold TRUE when the variable "result" AND "result2" are both equal "An error happened" and "An error happened" in both value and datatype respectively.
if ( result === "An error happened" && result2 === "An error happened") {

    //When this condition hold, it will tell console to show a message, "Catastrophic failure.".
    console.log("Catastrophic failure.");

}