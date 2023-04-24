const convertToCelsius = function(temp) {
    var celsius = (temp*1.8) + 32 ;//convert to celsius
    parseFloat(celsius.toFixed(1));
    return celsius;
};

const convertToFahrenheit = function(temp) {
    var Fahrenheit = (temp*9/5) + 32 ;// convert to F 
    parseFloat(Fahrenheit.toFixed(1));
    return Fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
