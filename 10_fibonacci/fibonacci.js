const fibonacci = function(n) {
    let sequence = [0, 1];

    for (let i = 0; i < n; i++) {
        sequence.push(sequence[0] + sequence[1]);
        sequence.shift();
    }
    return sequence[0];
};

// Do not edit below this line
module.exports = fibonacci;
