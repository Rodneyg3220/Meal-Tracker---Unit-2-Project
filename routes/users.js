const express = require('express');
const router = express.Router();

const mealsCtrl = require('../controllers/meals');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /user/new (new functionality)
router.get('/meals/new', ensureLoggedIn, mealsCtrl.new);
// POST /user (create functionality)
router.post('/meals', ensureLoggedIn, mealsCtrl.create);
// POST /meals/:id/user (associate a user with a meal)
router.post('/meals/:id/meals', ensureLoggedIn, mealsCtrl);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
