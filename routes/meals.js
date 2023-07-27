const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const mealsCtrl = require('../controllers/meals');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', mealsCtrl.index);

router.get('/new', ensureLoggedIn, mealsCtrl.newMeals);

router.get('/:id', mealsCtrl.show);

router.post('/', ensureLoggedIn, mealsCtrl.create);

router.delete("/:id", mealsCtrl.delete);

// router.updateMany("/:id", mealsCtrl.updateMany);

module.exports = router;
