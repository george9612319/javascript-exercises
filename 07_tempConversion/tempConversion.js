const convertToCelsius = function(temp) {
    var celsius = (temp-32)*5/9 ;//convert to celsius
    celsius = parseFloat(celsius.toFixed(1));
    return celsius;
};

const convertToFahrenheit = function(temp) {
    var Fahrenheit = (temp*9/5) + 32 ;// convert to F 
    Fahrenheit = parseFloat(Fahrenheit.toFixed(1));
    return Fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
