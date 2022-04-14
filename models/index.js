// Import models
const User = require("./User");
const Comment = require("./Comment");
const Game = require("./Game");

// User has many comments
User.hasMany(Comment, {
    foreignKey: "user_id"
});

// User has many games
User.hasMany(Game, {
    foreignKey: "user_id"
});

// Game has many comments
Game.hasMany(Comment, {
    foreignKey: "game_id"
});

// Game belongs to a user
Game.belongsTo(User, {
    foreignKey: "user_id"
});

// Comment belongs to a user
Comment.belongsTo(User, {
    foreignKey: "user_id"
});

// Comment belongs to a game
Comment.belongsTo(Game, {
    foreignKey: "game_id"
});

module.exports = { User, Comment, Game};