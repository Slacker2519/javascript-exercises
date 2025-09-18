const palindromes = function (str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverseStr = str.split('').reverse().join('');

    return str == reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
