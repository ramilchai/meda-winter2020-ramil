function checkTitleCommas(titleArray) {
    if (titleArray[3].charAt(0) === '"') {

        let doubleQFound = false;
        let currentArrayElement = 3;

        while (!doubleQFound) {
            let lastCharIndex = titleArray[currentArrayElement].length - 1;

            if (titleArray[currentArrayElement].charAt(lastCharIndex) === '"') {
                doubleQFound = true;
            } else {
                currentArrayElement += 1;
            }
        }

        let cutOutArray = titleArray.splice(3, currentArrayElement - 2);

        let combinedTitleString = cutOutArray.join(",");

        titleArray.splice(3, 0, combinedTitleString);
        
       
        // let lastCharacterIndex = titleArray[4].length - 1;

        // if (titleArray[4].charAt(lastCharacterIndex) === '"') {

        //     titleArray[3] = titleArray[3] + titleArray[4];

        //     titleArray.splice(4,1);
        // } else if (titleArray[5].charAt(titleArray[5].length - 1) === '"') {

        //     titleArray[3] = titleArray[3] + titleArray[4] + titleArray[5];

        //     titleArray.splice(4,2);
        // }

        return titleArray;

    } else {

        return titleArray;
    }
}

module.exports = {
    checkTitleCommas
}