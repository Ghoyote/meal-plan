var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var subscriptionSchema = new Schema({
  id: String,
  name: String,
  meal: Number,
  snack: Number,
  amount: Number,
  numberOfMeals: Number,
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});
module.exports = mongoose.model('Subscription', subscriptionSchema);
