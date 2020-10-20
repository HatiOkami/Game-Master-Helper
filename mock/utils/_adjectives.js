const GENRES = require('../models/_parameters/genres');
const THEMES = require('../models/_parameters/themes');

const getRandomNumberBetween = require('./_random').getRandomNumberBetween;
const getRandomNumberArrayExcludingUsedOneBetween = require('./_random').getRandomNumberArrayExcludingUsedOneBetween;

const getRandomAdjectives = function () {
  for (var i = 0; getRandomNumberBetween(1, 4); i++){

  };
  // var themeArray = ;

  var adjectives = {
    genres: genreArray,
    themes: themeArray,
  };

  return adjectives;
};
module.exports.getRandomAdjectives = getRandomAdjectives;

const getGenres = function () {

}
