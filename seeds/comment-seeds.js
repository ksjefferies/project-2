const { Comment } = require("../models");

const commentData = [
    {
        text: "Comment number 1",
        user_id: 1,
        game_id: 1
    },
    {
        text: "Comment number 2",
        user_id: 2,
        game_id: 2
    },
    {
        text: "Comment number 3",
        user_id: 3,
        game_id: 3
    },
    {
        text: "Comment number 4",
        user_id: 4,
        game_id: 4
    },
    {
        text: "Comment number 5",
        user_id: 5,
        game_id: 5
    },
    {
        text: "Comment number 6",
        user_id: 6,
        game_id: 6
    },
    {
        text: "Comment number 7",
        user_id: 7,
        game_id: 7
    },
    {
        text: "Comment number 8",
        user_id: 8,
        game_id: 8
    },
    {
        text: "Comment number 9",
        user_id: 9,
        game_id: 9
    },
    {
        text: "Comment number 10",
        user_id: 10,
        game_id: 10
    },
    {
        text: "Comment number 11",
        user_id: 11,
        game_id: 11
    },
    {
        text: "Comment number 12",
        user_id: 12,
        game_id: 12
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;