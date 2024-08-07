const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((sum, num) => sum += num, 0);
};

const multiply = function(nums) {
	return nums.reduce((sum, num) => sum *= num, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0) return 1;

  let fact = a;
  for (let i = a - 1; i > 0; i--) {
    fact *= i;
  }

  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
