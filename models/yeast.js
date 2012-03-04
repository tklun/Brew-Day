var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Yeast;

function validatePresenceOf(value) {
  return value && value.length;
}

Yeast = new Schema({
  'name': {
    type: String,
    validate: [validatePresenceOf, 'a name is required'],
    index: { unique: true }
  },
  'brand': {
    type: String,
    validate: [validatePresenceOf, 'a brand is required']
  },
  'model': {
    type: String,
    validate: [validatePresenceOf, 'a model is required'],
    index: { unique: true }
  }
});

mongoose.model('Yeast', Yeast);

exports.Yeast = function(db) {
  return db.model('Yeast');
};
