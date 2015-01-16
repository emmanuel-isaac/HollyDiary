var mongoose = require( 'mongoose' );

var dateOfBirthSchema = new mongoose.Schema({
  day: {type: Number},
  month: {type: Number},
  year: {type: Number}
});

var actorSchema = new mongoose.Schema({
  name: {type: String, required: true},
  dateOfBirth: [dateOfBirthSchema],
  sex: {type: String, required: true},
  movies: {type: [String], required: true},
  rating: {type: Number, required: true, min: 0, max: 5},
  lightSkinned: {type: Boolean, required: true, default: false},
  about: {type: String}
});

var Actor = mongoose.model('Actor', actorSchema);

module.exports = Actor;