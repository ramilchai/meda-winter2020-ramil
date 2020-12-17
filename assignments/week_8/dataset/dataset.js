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
    let currentYear = element.year;
    let currentYearArray = currentYear.split("/");

    if (currentYearArray[0] === "2018") {
        if(unions[currentUnion] === undefined) {
            unions[currentUnion] = 1; 
        } else {
            unions[currentUnion] += 1;
        }
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

console.log(`The union with code ${highestUnionCode} has a member count of ${highestUnionMemberCount} for the year of 2018.`)
//question 1 end


//question 2 start
console.log("What job tilte pays the most within each union code?");

let highestUnionPay = [];

titleArray.forEach(function (job) {
    let jobYear = job.year.split("/")[0];

    if (jobYear === "2018") {
        let found = false;

        highestUnionPay.forEach(function(unionCounter) {
            
            if (unionCounter.unionCode === job.unionCode) {

                if (job.biWeeklyAvg > unionCounter.highest) {
                    unionCounter.highest = job.biWeeklyAvg;
                    unionCounter.title = job.title;
                }
            }
        });
        
        if (!found) {
            highestUnionPay.push({
                unionCode: job.unionCode,
                highest: job.biWeeklyAvg,
                title: job.title
            });
        }
        

    }
    
});

let orderedUnionPay = highestUnionPay.sort(function(a,b) {
    if (a.unionCode > b.unionCode) {
        return 1;
    } else if (a.unionCode < b.unionCode) {
        return -1;
    } else {
        return 0;
    }
});

for (let i = 0; i < orderedUnionPay.length; i++) {
    let currentUnion = orderedUnionPay[i];

    console.log(`The highest paying job in 2018 for the union with code ${currentUnion.unionCode} is ${currentUnion.title} with an biWeekly income of $${currentUnion.highest}`);
}
//question 2 end

//question 3 start
console.log("How many new jobs in SFMTA did we have for each year. How many were lost?")

let jobCountArray = [];

titleArray.forEach(function(job){

    if (job.setID === "SFMTA") {

        let jobYear = job.year.split("/")[0];

        jobCountArray.forEach(function(jobCounter){
            if(jobYear === jobCounter.year) {
                jobCounter.jobCount++;
                found = true;
            }
        });

        if(!found) {
            jobCountArray.push({
                year: jobYear,
                jobCount: 1
            })
        }
    }
})

let orderedJobArray = jobCountArray.sort(function(a,b) {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
});

for (let i = 1; i < orderedJobArray.length; i++) {
    let year = orderedJobArray[i].year;
    let jobCount = orderedJobArray[i].jobCount;
    let prevJobCount = orderedJobArray[i-1].jobCount;
    
    let verb;
    let diff = jobCount - prevJobCount;

    if (diff > 0) {
        verb = "gained";
    } else {
        verb = "lost";
        diff = Math.abs(diff);
    }

    console.log(`For the year ${year}, we ${verb} jobs.`);
}
//question 3 end