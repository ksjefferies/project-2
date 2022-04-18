const router = require('express').Router();

const { Game, User, Comment } = require('../models');
const sequelize = require('../config/connection');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const gameData = await Game.findAll({
      include: [User],
    });

    const games = gameData.map((game) => game.get({ plain: true }));
    console.log(req.session.loggedIn)
    res.render('dashboard', {
      games: games,
      loggedIn: req.session.loggedIn 
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

//  ADD WITHAUTH
router.get('/game/:id', async (req, res) => {
  try {
    const gameData = await Game.findOne({
    
      where: { id: req.params.id },
      include: [
        User,
        {
          model: Comment,
          attributes: ['text'],
        },
      ],
    });

    if (gameData) {
      const game = gameData.get({ plain: true });
      console.log(game);
      // res.json(game)
    
      res.render('single-game', { game, loggedIn: req.session.loggedIn });

    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

module.exports = router;