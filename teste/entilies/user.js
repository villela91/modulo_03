import { randomUUID } from "node:crypto";
import { characterEntity } from "./character";

export class UserEntity {
  constructor(user) {
    this.id = user.id ?? randomUUID();
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.image = user.image;
    this.characters = user.characters ?? [];
  }

  validate() {
    if (!this.email || !this.password || this.name || this.image) {
      throw new Error("Invalid user");
    }
  }
  addcharacters(character) {
    const newCharacter = new characterEntity(character, this.id);
    this.character.push(newCharacter.getcharacter());
  }
  getUser() {
    const user = {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      image: this.image,
      characters: this.character,
    };
    return user;
  }
}
