const mongoose = require('mongoose');
const nutrition = require('./nutrition');
const Schema = mongoose.Schema;

const foodSchema = new Schema ({
    meal: {
        type: String

    
    },
    ingredients: {
        type: String
    },
    
    nutrition: {
        type: mongoose.Types.ObjectId,
        ref: "Nutrition",
    }, 

    haveIngredients: { type: Boolean, default: false },

    // Don't forget to add the comma above then
  // add the 3 new properties below
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true,
    
}, {
  timestamps: true
});


module.exports = mongoose.model("Meals", foodSchema)