var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Addition = require('./addition.js'),
    YeastStarter = require('./yeast-starter.js'),
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
    type: [YeastStarter],
    validate: [validatePresenceOf, 'a yeast is required']
  },
  'additions': {
    type: [Addition],
    validate: [validatePresenceOf, 'additions are required']
  },
});

mongoose.model('Beer', Beer);


exports.Beer = function(db) {
  return db.model('Beer');
};
