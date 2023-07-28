const express = require('express');
const router = express.Router();
const mealsCtrl = require('../controllers/meals');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /meals
router.get('/', mealsCtrl.index);
// GET /meals/new
router.get('/new', ensureLoggedIn, mealsCtrl.newMeals);
// GET /meals/:id (show functionality) 
router.get('/:id', mealsCtrl.show);
// POST /meals
router.post('/', ensureLoggedIn, mealsCtrl.create);
// DELETE /meals/:id
router.delete("/:id", mealsCtrl.delete);



module.exports = router;
