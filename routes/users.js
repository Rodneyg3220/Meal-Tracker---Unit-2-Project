const express = require('express');
const router = express.Router();

const mealsCtrl = require('../controllers/meals');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// This router is mounted to a "starts with" path of '/'

// GET /performers/new (new functionality)
router.get('/meals/new', ensureLoggedIn, mealsCtrl.new);
// POST /performers (create functionality)
router.post('/meals', ensureLoggedIn, mealsCtrl.create);
// POST /movies/:id/performers (associate a performer with a movie)
router.post('/movies/:id/meals', ensureLoggedIn, mealsCtrl);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
