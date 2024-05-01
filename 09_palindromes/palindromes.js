const palindromes = function (str) {
  let arr = str.split("");
  let reverse = [];
  for (let i = arr.length - 1; i < 0; i--) {
    reverse.splice(0, 1, arr[i]);
  }

  if (arr == reverse) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
