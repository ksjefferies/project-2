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
    }
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;