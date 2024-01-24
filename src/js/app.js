import Team from './Classes/Team';
import characters from './data';

const charactersToAdd = characters.reduce(
  (acc, character) => [...acc, new character(character.name)],
  []
);

const team = new Team();
team.add(charactersToAdd[0]);

