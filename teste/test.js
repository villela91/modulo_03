import { UserEntity} from"./entilies/user";
const user = new UserEntity({
    name:"luiz",
    email:"bestmail@mail.com",
    password:"senhasegura",
    image: "http://imgage.com",
    characters:[{
        id :"batata",
        name : "tomas",
        image : "http://imageshelby.com",
        userId : "pipa",
    },
    ],
});
user.addcharacters({
    name: "rick",
    image:"http://imagerick.com",
});
console.log(user.getUser());