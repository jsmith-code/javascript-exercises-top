const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }

    // Avoid adding empty string to itself
    if (!string) {
        return "";
    }

    let output = "";
    for (let i = 0; i < num; i++) {
        output += string;
    }

    return output;
};

// Do not edit below this line
module.exports = repeatString;
