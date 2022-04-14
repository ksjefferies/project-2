const router = require('express').Router();
const { Game, User } = require('../models');
// const withAuthorization = require('../utils/auth');

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

router.get('/new', (req, res) => {
    res.render('new-game', {
        layout: 'dashboard'
    });
});

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