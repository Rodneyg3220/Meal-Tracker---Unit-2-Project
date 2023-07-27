const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nutritionSchema = new Schema({
    calories: {
        type: Number
    },
    protien: {
        type: Number
    },
    sugar: {
        type: Number
    },
    // mealDay: Date
    }, {
        timestamps: true
});

module.exports = mongoose.model("Nutrition", nutritionSchema)