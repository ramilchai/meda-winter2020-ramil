const fs = require("fs");
const helpers = require("./helpers.js");
const Title = require("./Title.js");

const data = fs.readFileSync("hourly_rate.csv", "utf-8");

const dataArray = data.split("\n");

dataArray.shift();
dataArray.pop();
let titleArray = [];

for (let i = 0; i < dataArray.length; i++) {
    let entry = dataArray[i].split(",");
    let fixedEntry = helpers.checkTitleCommas(entry);
    let entryTitleObject = new Title(fixedEntry[1], fixedEntry[2], fixedEntry[3], fixedEntry[4], fixedEntry[5], parseInt(fixedEntry[7]), parseInt(fixedEntry[8]));

    titleArray.push(entryTitleObject);

}

// let example = dataArray[0].split(",");
// console.log(example);

// example = helpers.checkTitleCommas(example);

// console.log(example);
// //question 1 start
console.log("What Union has the most members?");

let unions = {};

titleArray.forEach(function (element) {
    let currentUnion = element.unionCode.toString();

    if(unions[currentUnion] === undefined) {
        unions[currentUnion] = 1; 
    } else {
        unions[currentUnion] += 1;
    }
});

let highestUnionMemberCount = 0;
let highestUnionCode = null;

for (let i in unions) {
    if(unions[i] > highestUnionMemberCount) {
        highestUnionMemberCount = unions[i];
        highestUnionCode = i;
    }
}

console.log(`The union with code ${highestUnionCode} has a member count of ${highestUnionMemberCount}.`)
//question 1 end


