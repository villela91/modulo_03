export class DeleteCharacterUserCase {
    constructor (characterRepository){
        this.repository = CharacterRepository;

    }
    async execute(characterId){
        const deleteCharacter = await this.repository.deleteCharacter(characterId);
        if(!deletedCharacter){
            throw new Error(`Could not delete choracter ${characterId}`);
        }
        return deletedCharacter;
    }
}