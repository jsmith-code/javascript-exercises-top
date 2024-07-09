const convertToCelsius = function(F) {
  // Formula for converting F° (Fahrenheit) to C° (Celsius)
  // See: https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature
  let C = (F - 32) * 5/9;

  // Round to one decimal place
  return Math.round(C * 10) / 10;
};

const convertToFahrenheit = function(C) {
  // Formula for converting C° (Celsius) to F° (Fahrenheit) 
  // See: https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature
  let F = (C * 1.8 + 32);

  // Round to one decimal place
  return Math.round(F * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
