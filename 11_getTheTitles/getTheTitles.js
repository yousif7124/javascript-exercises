const getTheTitles = function (obj) {
  let books = [];
  for (let i = 0; i < obj.length; i++) {
    books[i] = obj[i].title;
  }
  return books;
};

// Do not edit below this line
module.exports = getTheTitles;
