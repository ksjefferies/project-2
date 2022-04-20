const router = require('express').Router();

const { Game, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
var Sequelize = require('sequelize');
var Op = Sequelize.Op;

router.get('/', withAuth, async (req, res) => {
    console.log(req.session)
    try {
        const gameData = await Game.findAll({
            where: { "user_id": req.session.user_id },
            include: [User]
        });
        const commentData = await Comment.findAll({
            where: {
                "game_id": {
                    [Op.in]: gameData.map(i => i.id),
                }
            },
            include: [Game]
        });

        const games = gameData.map((game) => game.get({ plain: true }));
        // console.log(games);
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        // console.log(comments);
        res.render('dashboard', {
            layout: 'main', games, comments,
            loggedIn: req.session.loggedIn
        });

        if (loggedIn) {
            res.redirect("dashboard")
        }
        else {
            res.json("You are not logged in")
        }
    } catch (err) {
        console.log(err)
        res.status(500)
    }
});

router.get('/new', (req, res) => {
    res.render('new-game', {
    });
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const gameData = await Game.findByPk(req.params.id);

        if (gameData) {
            const game = gameData.get({ plain: true });
            console.log(game);

            res.render('edit-game', {
                layout: 'dashboard',
                game, user
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;