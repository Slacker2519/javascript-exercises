const fibonacci = function(index) {
    let fibonacci = [0, 1];
    for (let i = 2; i <= 100; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }

    if (Number.isInteger(Number(index))) {
        if (Number(index) < 0) {
            return "OOPS";
        }
        return fibonacci[index];
    }

    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
