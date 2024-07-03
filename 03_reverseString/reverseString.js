const reverseString = function(string) {
    if (!string) {
        return "";
    }

    // Work backwards through string and add each char in that order
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
