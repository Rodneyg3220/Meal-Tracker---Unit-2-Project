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
    
    mealDay: Date
}, {
  timestamps: true
});


module.exports = mongoose.model("Meals", foodSchema)