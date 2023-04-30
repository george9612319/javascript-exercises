const add = function(a,b) { 
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  return array.reduce((total, num) => total + num, 0);
};

const multiply = function(array) {
  if (array.length === 0) {
    return 0;
  } else {
  return array.reduce((total, num) => total *num, 1);}
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(num) {
  let sum =1;
  if (num === 0) {
    return 1;
  }
	else {for (var i=num; i>=1; i--) {
      sum *= i;
    }
  return sum;
  }
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
