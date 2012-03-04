var mongoose = require('mongoose'),
    User = require('./user.js'),
    Session = require('./session.js'),
    Beer = require('./beer.js');


exports.Beer = function(db) {
  return db.model('Beer');
};
