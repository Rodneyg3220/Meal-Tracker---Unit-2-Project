const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const mealsCtrl = require('../controllers/meals');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /meals
router.get('/', mealsCtrl.index);
// GET /movies/new
router.get('/new', ensureLoggedIn, mealsCtrl.newMeals);
// GET /meals/:id (show functionality) 
router.get('/:id', mealsCtrl.show);
// POST /meals
router.post('/', ensureLoggedIn, mealsCtrl.create);

router.delete("/:id", mealsCtrl.delete);



module.exports = router;
