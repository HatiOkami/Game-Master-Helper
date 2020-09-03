const getRandomNumberBetween = function (min = 0, max = 9) {
  return Math.floor(Math.random() * max) + min;
};
module.exports.getRandomNumberBetween = getRandomNumberBetween;

const getRandomNumberOfLength = function (length = 1) {
  var str = '';
  while (length > 0) {
    str = str + Math.floor(Math.random() * 9);
    length--;
  }
  return str;
};
module.exports.getRandomNumberOfLength = getRandomNumberOfLength;

const getRandomLetter = function (length = 1) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var str = '';
  while (length > 0) {
    str = str + letters.charAt(Math.floor(Math.random() * letters.length));
    length--;
  }
  return str;
};
module.exports.getRandomLetter = getRandomLetter;

const dateToString = function (date, shortYear = false) {
  const year = date.getFullYear();
  const moth = (1 + date.getMonth()).toString().padStart(2, '0');
  if (shortYear) {
    return day + '/' + month + '/' + (year + '').slice(2);
  } else {
    return day + '/' + month + '/' + year;
  }
};
module.exports.dateToString = dateToString;

const getRandomDate = function (from, to, toString = false) {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  const date = new Date(fromTime + Math.random() * (toTime - fromTime));

  if (toString) {
    return dateToString(date);
  } else {
    return date;
  }
};

const getRandomDay = function () {
  return (getRandomNumberBetween(1, 28) + '').padStart(2, '0');
};
module.exports.getRandomDay = getRandomDay;

const getRandomMonth = function () {
  return (getRandomNumberBetween(1, 12) + '').padStart(2, '0');
};
module.exports.getRandomMonth = getRandomMonth;

const getRandomYear = function () {
  return '19' + getRandomNumberOfLength(2);
};
module.exports.getRandomYear = getRandomYear;

getRandomTrueFalse = function () {
  return getRandomNumberBetween(0, 3) < 2;
};
module.exports.getRandomTrueFalse = getRandomTrueFalse;
