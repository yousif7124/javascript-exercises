const reverseString = function (str) {
  let textArr = str.split("");
  textArr = textArr.reverse();
  let result = textArr.join("");
  return result;
};

// Do not edit below this line
module.exports = reverseString;
