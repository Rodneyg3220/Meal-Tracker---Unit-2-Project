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

    mealDay: {
        type: Date
    }, 
    nutrition: {
        type: mongoose.Types.ObjectId,
        ref: "Nutrition",
    } 
});


module.exports = mongoose.model("Meals", foodSchema)