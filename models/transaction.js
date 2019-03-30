var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var transactionSchema = new Schema({
  meals: [
    {
      entry: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
      },
      unit_price: Number,
      portion: String,
      qty: Number
    }
  ],
  snacks: [
    {
      entry: {
        type: Schema.Types.ObjectId
      },
      unit_price: Number,
      portion: String,
      qty: Number
    }
  ],
  extras: [
    {
      entry: {
        type: Schema.Types.ObjectId,
        ref: 'Meal'
      },
      unit_price: Number,
      portion: String,
      qty: Number
    }
  ]
});
module.exports = mongoose.model('Transaction', transactionSchema);
