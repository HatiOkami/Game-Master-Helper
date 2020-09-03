const PRENOMS = require('../models/_random/firstnames');
const NOMS = require('../models/_random/lastnames');

const getRandomNumberOfLength = require('./_random').getRandomNumberOfLength;
const getRandomNumberBetween = require('./_random').getRandomNumberBetween;

const getRandomPrenomNom = function () {
  var prenom = PRENOMS[getRandomNumberBetween(0, PRENOMS.length -1)];
  var nom = NOMS[getRandomNumberBetween(0, NOMS.length -1)];
  return prenom + ' ' + nom;
}
