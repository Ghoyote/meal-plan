var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mealSchema = new Schema({
  name: {
    unique: true,
    required: true,
    type: String
  },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Ingredient'
    }
  ]
});

module.exports = mongoose.model('meal', mealSchema);
