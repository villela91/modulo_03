export class FindUserByIdUseCase {
  constructor(userRepository) {
    this.repository = userRepository;
  }
  async execute(userId) {
    
    if (!userId) {
      throw new error("user id sended is invalid");
    }
    const userFinded = await this.userRepository.findById(userId);
    return userFinded;
  }
}
