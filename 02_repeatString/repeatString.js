const repeatString = function(userInput, repeatNumber) {
    if (repeatNumber < 0) return "ERROR";
    let finalString = "";
    for (let i = 0; i < repeatNumber; i++) {
        finalString += userInput;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
