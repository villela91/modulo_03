import { CharacterEntity } from "../../../entilies/character";

export class Createcharacter {
  constructor(characterRepository, findUserById) {
    this.repository = characterRepository;
    this.findUserById = findUserById;
  }
  async execute(character, userId) {
    await this.findUserById.execute(userId);
    const newCharacter = new CharacterEntity(character, userId);
    newCharacter.validate();
    return await this.repository.create(newCharacter.getCharacter());
  }
}
