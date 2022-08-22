export class FindCreateAllCharacterCase{
    constructor ( characterRepository){
        this.repository = characterRepository;

    }
    async execute(){
        return await this.repository.find();
    }
}