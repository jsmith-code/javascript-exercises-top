const leapYears = function(year) {
    // See how leap years are determined:
    // (https://en.wikipedia.org/wiki/Leap_year#:~:text=Each%20leap%20year%20has%20366%C2%A0days%20instead%20of%20365.%20This%20extra%20leap%20day%20occurs%20in%20each%20year%20that%20is%20a%20multiple%20of%204%2C%20except%20for%20years%20evenly%20divisible%20by%20100%20but%20not%20by%20400.)
    
    // All leap years are divisible by 4
    if (year % 4 === 0) {
        // Leap years cannot be divisible by 100, 
        // unless they are also divisible by 400
        if (year % 100 !== 0 || year % 400 === 0) {
            return true;
        }
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
