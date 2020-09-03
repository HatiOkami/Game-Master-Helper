const DICTIONARY = {
  games: []
}

// Random data for hydration
const getRandomNumberBetween = require('./utils/_random').getRandomNumberBetween;

// Models
const GAME = require ('./models/game/game');

// Generate
function getGame(){
  var game = JSON.parse(JSON.stringify(GAME));

  game.adjectives.genres.id = getRandomNumberBetween(1, 5);

  DICTIONARY.games.push({id: game.id, title: game.title});

  return game;
}


const NUMBER_OF_ITEMS = 1;

var database = {
  games: []
}

for (var i = 0; i < NUMBER_OF_ITEMS; i++){
  database.games.push(getGame());
}

const fs = require('fs');
fs.writeFileSync('mock/dictionary.json', JSON.stringify(DICTIONARY));
console.log(JSON.stringify(database));
