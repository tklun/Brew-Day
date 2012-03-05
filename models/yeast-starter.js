var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Yeast = require('./yeast.js'),
    YeastStarter;

function validatePresenceOf(value) {
  return value && value.length;
}

YeastStarter = new Schema({
  'yeast': {
    type: [Yeast],
    validate: [validatePresenceOf, 'a name is required']
  },
  'cellCount': {
    type: Number,
    validate: [validatePresenceOf, 'a desired cell count is required']
  },
  'starterVolume': {
    type: Number,
    validate: [validatePresenceOf, 'a volume is required']
  },
  'maltExtractVolume': {
    type: Number,
    validate: [validatePresenceOf, 'a DME volume is required']
  },
  'oxygenMethod': {
    type: String,
    validate: [validatePresenceOf, 'a oxygen method is required']
  },
  'dateCreated': {
    type: Date,
    validate: [validatePresenceOf, 'a date is required']
  }
});

mongoose.model('YeastStarter', YeastStarter);

exports.YeastStarter = function(db) {
  return db.model('YeastStarter');
};
