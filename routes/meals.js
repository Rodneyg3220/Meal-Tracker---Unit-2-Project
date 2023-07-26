const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const mealsCtrl = require('../controllers/meals');

router.get('/', mealsCtrl.index);

router.get('/new', mealsCtrl.newMeals);

router.get('/:id', mealsCtrl.show);

router.post('/', mealsCtrl.create);

router.delete("/:id", mealsCtrl.delete);

module.exports = router;
