const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.redirect('/meals/new');
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/meals',
    failureRedirect: '/meals'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/meals');
  });
});

module.exports = router;