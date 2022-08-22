import { CharacterEntity } from "../../../entilies/character";

export class UpdateCharacterUseCase {
  constructor(characterRepository, findCharacterById) {
    this.repository = characterRepository;
    this.findCharacterById = findCharacterById;
  }
  async execute(characterUpdated, characterId) {
    const findCharacter = await this.findCharacterById.execute(characterId);
    const UpdateCharacter = Object.assign(findCharacter, characterUpdated);
    const validateCharacter = new CharacterEntity(UpdateCharacter);
    validatedCharacter.validate();
    return await this.repository.update(validateCharacter.getCharacter());
  }
}
