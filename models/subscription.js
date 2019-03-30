var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var subscriptionSchema = new Schema({
  id: String,
  meal: Number,
  snack: Number,
  amount: Number,
  numberOfMeals: Number
});
module.exports = mongoose.model('Subscription', subscriptionSchema);
