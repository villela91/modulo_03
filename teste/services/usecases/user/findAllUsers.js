export class findAllUsersUseCase{
    constructor(userRepository){
        this.userRepository = userRepository;

    }
    async execute(){
        return await this.userRepository.findAll();
    }
}