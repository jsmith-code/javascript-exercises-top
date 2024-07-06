const sumAll = function(a, b) {
    if (a < 0 || b < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    let bigger;
    let smaller;
    if (a > b) {
        bigger = a;
        smaller = b;
    } else {
        bigger = b;
        smaller = a;
    }

    let sum = 0;
    for (let i = smaller; i <= bigger; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
