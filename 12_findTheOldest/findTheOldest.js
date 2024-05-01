const findTheOldest = function (names) {
  let oldest = 0;
  let oldestName, current, yod, yob;
  for (let i = 0; i < names.length; i++) {
    if (!names[i].yearOfDeath) {
      yod = 2024;
    } else {
      yod = names[i].yearOfDeath;
    }
    yob = names[i].yearOfBirth;
    current = yod - yob;
    if (current > oldest) {
      oldest = current;
      oldestName = names[i];
    }
  }
  return oldestName;
};

// Do not edit below this line
module.exports = findTheOldest;
