import express from "express";
import cors from "cors";

import { MongoDbConnection } from "./database/mongo/connection/connect.js";
import { makeUserFactory } from "./factories/user.js";
import { makeCharacterFactory } from "./factories/character.js";

const ConnectDb = new MongoDbConnection();
await ConnectDb.ConnectDb();

const app = express();
const {Router} = express;

const user = makeUserFactory(Router);
const character = makeCharacterFactory(Router);

app.use(express.json());
app.use(cors());
app.use("/characters", character.route());
app.use("/users", user.route());

app.listen(3000, () => {
  console.log("Servidor rodando em: http://localhost:3000");
});