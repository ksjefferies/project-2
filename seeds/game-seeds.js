const { Game } = require("../models");

const gameData = [
    {
        title: "Ratchet and Clank",
        platform: "PS5",
        genre: "Action",
        user_id: 1,
        comment_id: 1
    },
    {
        title: "Metroid Dread",
        platform: "Switch",
        genre: "Action",
        user_id: 2,
        comment_id: 2
    },
    {
        title: "Halo Infinite",
        platform: "Xbox",
        genre: "FPS",
        user_id: 3,
        comment_id: 3
    },
    {
        title: "Forza Horizon 5",
        platform: "Xbox",
        genre: "Racing",
        user_id: 4,
        comment_id: 4
    },
    {
        title: "Resident Evil Village",
        platform: "PS5",
        genre: "Action",
        user_id: 5,
        comment_id: 5
    },
    {
        title: "Monster Hunter Rise",
        platform: "Switch",
        genre: "Action",
        user_id: 6,
        comment_id: 6
    },
    {
        title: "Elden Ring",
        platform: "PS5",
        genre: "Action/RP",
        user_id: 6,
        comment_id: 6
    },
    {
        title: "Unsighted",
        platform: "Xbox",
        genre: "Action",
        user_id: 7,
        comment_id: 7
    },
    {
        title: "WarioWare",
        platform: "Switch",
        genre: "Party",
        user_id: 8,
        comment_id: 8
    },
    {
        title: "Deathloop",
        platform: "PS5",
        genre: "FPS",
        user_id: 9,
        comment_id: 9
    },
    {
        title: "Deaths Door",
        platform: "Xbox",
        genre: "Action",
        user_id: 10,
        comment_id: 10
    },
    {
        title: "Psychonauts 2",
        platform: "Xbox",
        genre: "Adventure",
        user_id: 11,
        comment_id: 11
    },
    {
        title: "It Takes Two",
        platform: "Xbox",
        genre: "Adventure",
        user_id: 12,
        comment_id: 12
    },

];

const seedGames = () => Game.bulkCreate(gameData);
module.exports = seedGames;