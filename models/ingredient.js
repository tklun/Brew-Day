var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Ingredient;

function validatePresenceOf(value) {
  return value && value.length;
}

Ingredient = new Schema({
  'name': {
    type: String,
    validate: [validatePresenceOf, 'a name is required'],
    index: { unique: true }
  },
  'type': {
    type: String,
    validate: [validatePresenceOf, 'a type is required']
  }
});

mongoose.model('Ingredient', Ingredient);


exports.Yeast = function(db) {
  return db.model('Ingredient');
};
