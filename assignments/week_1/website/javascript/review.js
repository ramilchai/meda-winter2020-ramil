console.log("Hello There");

let myFirstVariable = 10; 
myFirstVariable;

var myFirstGloballyScopedVar = 11;

for (var i = 0; i < 10; i = i + 1) {

    setTimeout(function () {
        console.log(i);
    }, 1000);
} 

for (let i = 0; i < 10; i = i + 1) {

    setTimeout(function () {
        console.log(i);
    }, 1000);
} 

const january = 1;
const febuary = 2;

if (january === 3) {
    console.log("January is the 3rd month");
} else if (febuary === 2) {
    console.log("Febuary is the 2rd month");
} else {
    console.log("January is not the 3rd month");
}

// === means we are comparing data and datatype
// 1 == "1" this is TRUE
// 1 === "1" this is FALSE

//arrow function

setTimeout(() => {}, 1000);

// Type Coercion
// Is where Javascript converts one datatype to another automatically
// 100 == "100" // The string will try to be converted to a number

parseInt(); // take the string argument, and converts it to a number;

january.toString(); // takes number from variable or property and converts to a string

parseFloat() // convert to float
//type coercion into Booleans 
//Falseys
0;
"";
undefined;
NaN; //Doesn't convert to a boolean, need to use isNaN() function.
null;

// Logical Oerators and Comparison Operators
/*
==
=== same datatype

+= 
-= 
*=
/=

*/
let myArray = [1, 2, 3, 4];

myArray[3];
myArray[10] = () => {console.log("goodbyecd ..")};

//Array manipulation
// Add 
myArray.push();
myArray.unshift();
// Remove
myArray.pop();
myArray.shift();

let myObject = {
    firstNum: "1",
    "second Num": "2",
    thirdNum: 3,
    fourthNum: 4
};