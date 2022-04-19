const { User } = require("../models");

const userData = [
    {
        username: "username1",
        email: "email1@gmail.com",
        password: "password1"
    },
    {
        username: "username2",
        email: "email2@gmail.com",
        password: "password2"
    },
    {
        username: "username3",
        email: "email3@gmail.com",
        password: "password3"
    },
    {
        username: "username4",
        email: "email4@gmail.com",
        password: "password4"
    },
    {
        username: "username5",
        email: "email5@gmail.com",
        password: "password5"
    },
    {
        username: "username6",
        email: "email6@gmail.com",
        password: "password6"
    },
    {
        username: "username7",
        email: "email7@gmail.com",
        password: "password7"
    },
    {
        username: "username8",
        email: "email8@gmail.com",
        password: "password8"
    },
    {
        username: "username9",
        email: "email9@gmail.com",
        password: "password9"
    },
    {
        username: "username10",
        email: "email10@gmail.com",
        password: "password10"
    },
    {
        username: "username11",
        email: "email11@gmail.com",
        password: "password11"
    },
    {
        username: "username12",
        email: "email12@gmail.com",
        password: "password12"
    }

];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;