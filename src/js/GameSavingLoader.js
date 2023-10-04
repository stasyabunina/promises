import GameSaving from './GameSaving';
import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((data) => json(data))
      .then((data) => new GameSaving(JSON.parse(data)));
  }
}
