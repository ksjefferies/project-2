const router = require('express').Router();
const { Game, User } = require('../models');
// const withAuth = require('../utils/auth');

// ADD WITHAUTH
router.get('/', async (req, res) => {
    try {
        const gameData = await Game.findAll({
            where: { "userId": req.session.userId },
            include: [User]
        });

        const games = gameData.map((game) => game.get({ plain: true }));
        console.log(games);
        res.render('all-games', {
            layout: 'dashboard', games,
        });
    } catch (err) {
        res.redirect('login');
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