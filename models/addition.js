var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Ingredient = require('./ingredient.js'),
    Addition;

function validatePresenceOf(value) {
  return value && value.length;
};

Addition = new Schema({
  'name': {
    type: String,
    validate: [validatePresenceOf, 'a name is required'],
    index: { unique: true }
  },
  'amount': {
    type: Number,
    validate: [validatePresenceOf, 'an amount is required']
  },
  'time': {
    type: Date,
    validate: [validatePresenceOf, 'a time is required']
  },
  'ingredient': {
    type: [Ingredient],
    validate: [validatePresenceOf, 'an ingredient is required']
  },
});

mongoose.model('Addition', Addition);


exports.Yeast = function(db) {
  return db.model('Addition');
};
