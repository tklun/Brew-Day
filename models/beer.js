var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Addition = require('./addition.js'),
    Yeast = require('./yeast.js')
    Beer;

function validatePresenceOf(value) {
  return value && value.length;
};

Beer = new Schema({
  'name': {
    type: String,
    validate: [validatePresenceOf, 'a name is required'],
    index: { unique: true }
  },
  'brewDate': {
    type: Date,
    validate: [validatePresenceOf, 'a date is required']
  },
  'yeastStarter': {
    type: [Yeast],
    validate: [validatePresenceOf, 'a yeast is required']
  },
  'additions': {
    type: [Addition],
    validate: [validatePresenceOf, 'additions are required']
  },
});

mongoose.model('Beer', Beer);


exports.Yeast = function(db) {
  return db.model('Beer');
};
