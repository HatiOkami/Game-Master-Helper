const DICTIONARY = {
  games: [],
};

// Random data for hydration
const getRandomAdjectives = require('./utils/_adjectives').getRandomAdjectives;

// Models
const GAME = require('./models/game/game');

// Simple data
const TITLE = require('./models/_random/titles');
const LOREM = require('./models/_parameters/lorem');

// Generate Game
function getGame(id) {
  var game = JSON.parse(JSON.stringify(GAME));

  game.id = i + 1;
  game.title = TITLE[i];
  game.description = LOREM;
  game.adjectives = getRandomAdjectives();

  DICTIONARY.games.push({ id: game.id, title: game.title });

  return game;
}

// Launch generates
const NUMBER_OF_ITEMS = 2;

var database = {
  games: [],
};

for (var i = 0; i < NUMBER_OF_ITEMS; i++) {
  database.games.push(getGame(i));
}

const fs = require('fs');
fs.writeFileSync('mock/dictionary.json', JSON.stringify(DICTIONARY));
console.log(JSON.stringify(database));
