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


module.exports = {
    create, 
    new: newNutrition,

}
