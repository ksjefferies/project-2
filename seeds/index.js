const mysql = require('mysql2');

const seedUsers = require("./user.seeds");
const seedGames = require("./game-seeds");
const seedComments = require("./comment-seeds");
const sequelize = require("../config/connection");

require("dotenv").config();

const con = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}).promise();

const seedAll = async () => {
    await con.connect();
    await con.query("DROP DATABASE IF EXISTS gaming_db");
    await con.query("CREATE DATABASE gaming_db");
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedGames();
    await seedComments();

    process.exit(0);
};

seedAll();