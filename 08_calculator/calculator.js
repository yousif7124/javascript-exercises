const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  if (arr == undefined) {
    return 0;
  }

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
};

const multiply = function (arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
  }

  return result;
};

const power = function (num1, num2) {
  let result = num1;
  for (let i = 1; i < num2; i++) {
    result = result * num1;
  }
  return result;
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  }

  let result = num;
  for (let i = num - 1; i > 0; i--) {
    result = result * i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
