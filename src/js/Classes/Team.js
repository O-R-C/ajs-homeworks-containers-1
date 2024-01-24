export default class Team {
  members = new Set();

  add(character) {
    if (this.members.has(character)) {
      throw new Error(
        'нельзя добавить больше одного уникального типа персонажа'
      );
    }

    this.members.add(character);
  }

  addAll(characters) {
    return `add ${characters}`;
  }

  toArray() {
    return 'convert';
  }
}
