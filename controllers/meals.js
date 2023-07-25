const Meals = require('../models/meals');
// const { router } = require('../server');
const Nutrition = require('../models/nutrition');

module.exports = {
  index,
  show,
  newMeals,
  create,
//   addNutrition
};

async function index(req, res) {
  const meals = await Meals.find({});
  res.render('meals/index', { title: 'All Meals', meals });
}

async function show(req, res) {
  const meals = await Meals.findById(req.params.id);
  res.render('meals/show', { title: 'Meals Detail', meals, nutrition: await Nutrition.find ({meals: meals._id})});
}

function newMeals(req, res) {
  res.render('meals/new', { title: 'Create Your Meal!', errorMsg: '' });
}

async function create(req, res) {
  req.body.haveIngredients = !!req.body.haveIngredients;
  try {
   console.log(req.body)
   await Meals.create(req.body);

    res.redirect('/meals');  

  } catch (err) {
    console.log(err);
    res.render('meals/new', { errorMsg: err.message });
  }
}

    // async function addNutrition(req, res, next) {
    // Meals.findById(req.params.id, function(err, meals) {
    //   meals.destinations.push(req.body);
    //   meals.save(function(err, meals) {
    //       res.redirect(`/meals/${meals._id}`);
    //   });
    // });
// }