export default class Team {
  members = new Set();

  add(character) {
    return `add ${character}`;
  }

  addAll(characters) {
    return `add ${characters}`;
  }

  toArray() {
    return 'convert';
  }
}
