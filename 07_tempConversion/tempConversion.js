const convertToCelsius = function (temp) {
  let tempC = ((temp - 32) * 5) / 9;
  let roundC = Math.round(tempC * 10);
  return roundC / 10;
};

const convertToFahrenheit = function (temp) {
  let tempF = (temp * 9) / 5 + 32;
  let roundF = Math.round(tempF * 10);
  return roundF / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
