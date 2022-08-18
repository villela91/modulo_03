export class UpdateUserUserCase{
    constructor(userRepository, findUserById){
        this.repository = userRepository;

    }
    async execute(userUpdated, userID){
        const userToUpdate = await this.findUserById.execute(userId);
        if(!userToUpdate){
            throw new Error("not found a user whith UserId: " + userId)
        }
        const useModified = {...userToUpdate, userUpdate};
        const userValidated = new UserEntity(useModified);
        userValidated.validate()
        return await this.repository.updateUser(userValidated.getUser())
    }
}