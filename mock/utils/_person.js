const PRENOMS = require('../models/_random/firstnames');
const NOMS = require('../models/_random/lastnames');

const getRandomNumberBetween = require('./_random').getRandomNumberBetween;

const getRandomPrenomNom = function () {
  var prenom = PRENOMS[getRandomNumberBetween(0, PRENOMS.length -1)];
  var nom = NOMS[getRandomNumberBetween(0, NOMS.length -1)];
  return prenom + ' ' + nom;
}
module.exports.getRandomPrenomNom = getRandomPrenomNom;
