import { userRepositoryMongoDb } from "./database/repository/userRepository.js";
import {CreateUserUseCase} from "./services/usecases/createUser.js";
const repository = new userRepositoryMongoDb();
 const createUserUse = new CreateUserUseCase(repository);
 const newUser = await CreateUserUseCase.execute({
    name: "leo",
    email:"bestmail@mail.com",
    password:"senhasegura",
    Image:"http://imagem.com",
 });

 console.log(newUser);
