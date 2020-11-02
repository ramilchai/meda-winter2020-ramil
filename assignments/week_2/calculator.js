let argument = process.argv;

let number1 = argument[2];
let mathOperator = argument[3];
let number2 = argument[4];

let num1Converted = parseInt(number1);
let num2Converted = parseInt(number2);


if (isNaN(num1Converted) || isNaN(num2Converted)) {
    console.log("Error 349923: The first or second number is not an actual number! Try again. Note that * is not a valid Math Operator");

} else {
    if (mathOperator === "+") {
        console.log(`The sum of ${num1Converted} and ${num2Converted} is ${num1Converted + num2Converted}.`);
    } else if (mathOperator === "-") {
        console.log(`The sum of ${num1Converted} and ${num2Converted} is ${num1Converted - num2Converted}.`);
    } else if (mathOperator === "*" || mathOperator === "x" || mathOperator === "times") {
        console.log(`The sum of ${num1Converted} and ${num2Converted} is ${num1Converted * num2Converted}.`);
    } else if (mathOperator === "/" || mathOperator === "by") {
        console.log(`The sum of ${num1Converted} and ${num2Converted} is ${num1Converted / num2Converted}.`);
    }
}
    