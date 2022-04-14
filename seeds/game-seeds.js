const { Game } = require("../models");

const gameData = [
    {
        title: "Title 1",
        release_date: 12/20/2020,
        developers: "Developer 1",
        rating: 3.5,
        user_id: 1,
        comment_id: 1
    },
    {
        title: "Title 2",
        release_date: 01/05/2019,
        developers: "Developer 2",
        rating: 4,
        user_id: 2,
        comment_id: 2
    },
    {
        title: "Title 3",
        release_date: 08/13/2021,
        developers: "Developer 3",
        rating: 4.5,
        user_id: 3,
        comment_id: 3
    },
    {
        title: "Title 4",
        release_date: 07/12/2021,
        developers: "Developer 4",
        rating: 2.5,
        user_id: 4,
        comment_id: 4
    },
    {
        title: "Title 5",
        release_date: 01/01/2022,
        developers: "Developer 5",
        rating: 5,
        user_id: 5,
        comment_id: 5
    },
    {
        title: "Title 6",
        release_date: 02/18/2021,
        developers: "Developer 6",
        rating: 4,
        user_id: 6,
        comment_id: 6
    },
];

const seedGames = () => Game.bulkCreate(gameData);
module.exports = seedGames;