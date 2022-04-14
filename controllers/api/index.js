const router = require("express").Router();

const gameRoutes = require("./game-routes");
const commentRoutes = require("./comment-routes");
const userRoutes = require("./user-routes");

router.use("/game", gameRoutes);
router.use("/comments", commentRoutes);
router.use("/users", userRoutes);

module.exports = router;