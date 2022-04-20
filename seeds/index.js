const sequelize = require("../config/connection");

const seedUsers = require("./user.seeds");
const seedGames = require("./game-seeds");
const seedComments = require("./comment-seeds");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedGames();
    await seedComments();

    process.exit(0);
};

seedAll();