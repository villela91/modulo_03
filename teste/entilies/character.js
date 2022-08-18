import { randomUUID } from "node:crypto";

export class character {
  constructor(character, userId) {
    this.id =character.id ?? randomUUID();
    this.name = characterr.name;
    this.image = character.image;
    this.userId = userId;
  }
  getCharacter() {
    return {
      id: this.id,
      name: this.name,
      image: this.image,
      userId: this.userId,
    };
  }
}
