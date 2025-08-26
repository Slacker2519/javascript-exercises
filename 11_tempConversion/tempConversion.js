const convertToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * (5/9));
  if (!Number.isInteger(celsius))
    return parseFloat(celsius.toFixed(1));
  else
    return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (celsius * (9/5) + 32);
  if (!Number.isInteger(fahrenheit))
    return parseFloat(fahrenheit.toFixed(1));
  else
    return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
