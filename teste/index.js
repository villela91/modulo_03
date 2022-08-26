import express, { Router } from "express";
import cors from "cors";

import { MongoDbConnection } from "./database/mongo/connection/connect.js";
import { makeUserFactory } from "./factories/user.js";
import { makeCharacterFactory } from "./factories/character.js";

const ConnectDb = new MongoDbConnection();
await ConnectDb.ConnectDb();

const app = express();
const router = Router();

const user = makeUserFactory(router);
const character = makeCharacterFactory(router);

app.use(express.json());
app.use(cors());
app.use("/characters", character.route());
app.use("/users", user.route());

app.listen(3000, () => {
  console.log("Servidor rodando em: http://localhost:3000");
});