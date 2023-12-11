const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  platformId: String,
  activated: Boolean
});

const User = mongoose.model('User', UserSchema);

module.exports = User;