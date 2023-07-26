const meals = require('../models/meals');
const Meals = require('../models/meals');
// const { router } = require('../server');
const Nutrition = require('../models/nutrition');
const nutrition = require('./nutrition');

module.exports = {
  index,
  show,
  newMeals,
  create,
  addNutrition,
  delete: deleteMeals
};

async function deleteMeals(req, res){
    const meals = await Meals.findById(req.params.id)
    await Nutrition.findByIdAndDelete(meals.nutrition)
    await Meals.findByIdAndDelete(meals._id)
    res.redirect("/meals")
}

async function index(req, res) {
  const meals = await Meals.find({});
  res.render('meals/index', { title: 'All Meals', meals });
}

async function show(req, res) {
  const meals = await Meals.findById(req.params.id).populate("nutrition");
  res.render('meals/show', { title: 'Meals Detail', meals,});
}

function newMeals(req, res) {
  res.render('meals/new', { title: 'Create Your Meal!', errorMsg: '' });
}

async function create(req, res) {
  req.body.haveIngredients = !!req.body.haveIngredients;
  try {
  const nutrition = await Nutrition.create(req.body)
  req.body.nutrition = nutrition._id
   console.log(req.body)
   await Meals.create(req.body);

    res.redirect('/meals');  

  } catch (err) {
    console.log(err);
    res.render('meals/new', { errorMsg: err.message });
  }
}



    async function addNutrition(req, res, next) {
    Meals.findById(req.params.id, function(err, meals) {
      meals.destinations.push(req.body);
      meals.save(function(err, meals) {
          res.redirect(`/meals/${meals._id}`);
      });
    });
}