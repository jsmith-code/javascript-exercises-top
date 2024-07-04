const removeFromArray = function(arr, ...targets) {
    // Check if no elements to remove
    if (!targets) {
        return arr;
    }

    for (target of targets) {
        arr = arr.filter(element => element !== target);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
