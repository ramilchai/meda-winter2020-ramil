const fs = require("fs");

const data = fs.readFileSync("hourly_rate.csv", "utf-8");

const dataArray = data.split("\n");

dataArray.shift();
dataArray.pop();

class Title {
    constructor(year, title, unionCode, setID, min, max) {
        this.year = year;
        this.setID = setID; 
        this.title = title;
        this.unionCode = unionCode;
        this.biWeeklyMin = min;
        this.biWeeklyMax = max;
        this.biWeeklyAvg = (min + max) / 2;
        this.steps = [];
    }
}

const example = dataArray[0].split(",");

console.log(example);

//question 1 start

console.log("What union has the most members?");

//question 1 end