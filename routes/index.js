// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Meals Tracker' });
// });

// module.exports = router;

const express = require('express');
const router = express.Router();


router.get('/', function(req, res, next) {
  res.redirect('/meals/new');
});

module.exports = router;