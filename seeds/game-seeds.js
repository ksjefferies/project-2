const { Game } = require("../models");

const gameData = [
    {
        title: "Title 1",
        platform: "Platform 1",
        genre: "Genre 1",
        user_id: 1,
        comment_id: 1
    },
    {
        title: "Title 2",
        platform: "Platform 2",
        genre: "Genre 2",
        user_id: 2,
        comment_id: 2
    },
    {
        title: "Title 3",
        platform: "Platform 3",
        genre: "Genre 3",
        user_id: 3,
        comment_id: 3
    },
    {
        title: "Title 4",
        platform: "Platform 4",
        genre: "Genre 4",
        user_id: 4,
        comment_id: 4
    },
    {
        title: "Title 5",
        platform: "Platform 5",
        genre: "Genre 5",
        user_id: 5,
        comment_id: 5
    },
    {
        title: "Title 6",
        platform: "Platform 6",
        genre: "Genre 6",
        user_id: 6,
        comment_id: 6
    },
];

const seedGames = () => Game.bulkCreate(gameData);
module.exports = seedGames;