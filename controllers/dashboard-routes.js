const router = require('express').Router();
const { Game, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');

// ADD WITHAUTH
router.get('/', async (req, res) => {
    console.log(req.session)
    try {
        const gameData = await Game.findAll({
            where: { "user_id": req.session.user_id },
            include: [User]
        });
        const commenData = await Comment.findAll({
            where: { "game_id": req.session.game_id },
            include: [Game]
        });
        const games = gameData.map((game) => game.get({ plain: true }));
        console.log(games);
        const comments = commenData.map((comment) => comment.get({ plain: true }));
        console.log(games);
        res.render('dashboard', {
            layout: 'main', games, comments
        });
        if (loggedIn) {
            res.redirect("dashboard")
        } 
        // else {
        //     res.json("You are not logged in")
        // }
    } catch (err) {
        console.log(err)
        res.status(500)
    }
});

// ADD WITHAUTH
router.get('/new', (req, res) => {
    res.render('new-game', {
        layout: 'dashboard'
    });
});

// ADD WITHAUTH
router.get('/edit/:id', async (req, res) => {
    try {
        const gameData = await Game.findByPk(req.params.id);

        if (gameData) {
            const game = gameData.get({ plain: true });
            console.log(game);

            res.render('edit-game', {
                layout: 'dashboard',
                game,
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;