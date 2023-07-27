const Meals = require('../models/meals');
const Nutrition = require('../models/nutrition');

module.exports = {
  index,
  show,
  newMeals,
  create,
  delete: deleteMeals,
//   updateMany
};

async function deleteMeals(req, res) {
  const meals = await Meals.findById(req.params.id);
  await Nutrition.findByIdAndDelete(meals.nutrition);
  await Meals.findByIdAndDelete(meals._id);
  res.redirect('/meals');
}

async function index(req, res) {
  const meals = await Meals.find({});
  res.render('meals/index', { title: 'All Meals', meals });
}

async function show(req, res) {
  const meals = await Meals.findById(req.params.id).populate('nutrition');
  res.render('meals/show', { title: 'Meals Detail', meals });
}

function newMeals(req, res) {
  res.render('meals/new', { title: 'Create Your Meal!', errorMsg: '' });
}

async function create(req, res) {
  req.body.haveIngredients = !!req.body.haveIngredients;

  try {
    const nutrition = await Nutrition.create(req.body);

    // Add the nutrition to the meal
    req.body.nutrition = nutrition._id;

    // Add user-centric info to req.body (the new meal)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    // Create the new meal
    await Meals.create(req.body);

    res.redirect('/meals');
  } catch (err) {
    console.log(err);
    res.render('meals/new', { errorMsg: err.message });
  }
}

// async function updateMany(req, res) {
   
  
//     try {
//       await Meals.updateMany(filter, update);
//       res.redirect('/meals');
//     } catch (err) {
//       console.log(err);
//       res.render('error-page', { errorMsg: err.message });
//     }
//   }
