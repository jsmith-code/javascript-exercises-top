const fibonacci = function(n) {
    // Each number in the fibonacci sequence
    // is the sum of the previous two numbers:
    // 0, 1, 1, 2, 3, 5, 8, 13...
    // 
    // Starting numbers can vary. For more info, see:
    // https://en.wikipedia.org/wiki/Fibonacci_sequence

    if (n < 0) return "OOPS";
    
    // Starting numbers
    let sequence = [0, 1];

    for (let i = 0; i < n; i++) {
        sequence.push(sequence[0] + sequence[1]);
        sequence.shift();
    }
    return sequence[0];
};

// Do not edit below this line
module.exports = fibonacci;
