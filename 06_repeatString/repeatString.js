const repeatString = function(string, loopNumber) {
    if (loopNumber < 0)
        return "ERROR";

    let newString = '';
    for (let i = 0; i < loopNumber; i++)
    {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
