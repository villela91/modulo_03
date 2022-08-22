export class FindCharacterByNameCase{
    constructor(characterRepository){
        this.repository = characterRepository;
        }
        async execute(characterName){
            return await this.repository.findByName(characterName);
            
        }
}