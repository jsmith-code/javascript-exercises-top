const palindromes = function (str) {
    let parsed = str.toLowerCase()
                    .split('')
                    .filter(c => (c.toUpperCase() != c) || ('0' <= c && c <= '9'))
                    .join('');

    let halfParsedLen = Math.floor(parsed.length / 2);

    for (let i = 0; i < halfParsedLen; i++) {
        let opposite = (parsed.length - 1) - i;
        if (parsed[i] !== parsed[opposite]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
