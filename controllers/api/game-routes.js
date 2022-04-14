const router = require('express').Router();

const { Game } = require("../../models");
// const withAuthorization = require('../../utils/auth');

// Get all comments
router.get("/", async (req, res) => {
    const allGames = await Game.findAll({});
    res.json(allGames);
});

// Create a new comment
router.post("/", async (req, res) => {
    try {
        const createGame = await Game.create({
            title: req.body.title,
            platform: req.body.platform,
            genre: req.body.genre,
            user_id: req.body.user_id,
        })
        res.status(200).json("Success");
    }
    catch (err) {
        res.status(500).json(err);
    };
});

// Update an existing game
router.put("/:id", async (req, res) => {
    try {
        const updateGame = await Game.update({
            title: req.body.title,
            platform: req.body.platform,
            genre: req.body.genre,
        },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        if (updateGame) {
            res.status(200).json("Success");
        } else {
            res.status(400).json({ message: "That comment was not found" })
        };
    }
    catch (err) {
        res.status(500).json(err);
    };
});

// Delete an existing comment
router.delete("/:id", async (req, res) => {
    try {
        const destroyGame = Game.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!destroyGame) {
            res.status(400).json({ message: "That comment was not found" });
        } else {
            res.json("Success");
        };
    }
    catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;