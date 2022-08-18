export class DeleteUserUseCase{
    constructor(userRepository){
        this.repository = userRepositorry;

    }
    async execute(userId){
        const deletedUser = await this.repository.deleteUser(userId);
        if(!deletedUser){
            throw new Error("user not found");
        }
        return deletedUser;
    }
}