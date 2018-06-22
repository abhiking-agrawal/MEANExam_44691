const mongoose = require("mongoose")

var userSchema = new mongoose.Schema({
  make:  String,
  model:  String,
  year:  Number,
  type : String,
  features : String,
  purchaseDate : Date
});

module.exports = mongoose.model('Users', userSchema);