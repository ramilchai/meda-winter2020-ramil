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