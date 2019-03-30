var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  school_id: {
    unique: true,
    required: true,
    type: String
  },
  name: {
    first: { required: true, type: String },
    middle: { required: true, type: String },
    last: { required: true, type: String }
  },
  subscription_type: { required: true, type: String },
  meals: {
    attended: { required: true, type: Boolean },
    ate: { required: true, type: Boolean },
    transaction: {}
  }
});
module.exports = mongoose.model('User', userSchema);
