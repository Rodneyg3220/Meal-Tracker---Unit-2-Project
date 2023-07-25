const Meals = require('../models/meals');
const Nutrition = require(`../models/nutrition`);



async function create(req,res) {
  req.body.meals = req.params.id
  try {
  console.log(req.body)
  
  const nutrition = await Nutrition.create(req.body)
    res.redirect(`/meals/${nutrition.meals}`)
} catch (err) {
    console.log(err);
    res.redirect('/meals');
  }
}

function newNutrition(req, res) {
  res.render('nutrition/new', {
    title: 'Add Nutrition',
    meals: req.params.id
  })
}

function addNutrition(req, res, next) {
    Meals.findById(req.params.id, function(err, meals) {
      meals.nutrition.push(req.body);
      meals.save(function(err, meals) {
          res.redirect(`/meals/${meals._id}`);
      });
    }),

module.exports = {
    create, 
    new: newNutrition,
    addNutrition
}
};
