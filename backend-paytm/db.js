const mongoose = require("mongoose");
const {MONGO_URL} = require('./config')

mongoose.connect(MONGO_URL).then(()=> console.log("Successfully connected to the database!")).
catch (error => console.log("Failed to connect to the database"))
// USER SCHEMA
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },

  firstName: {
    type: String,
    required: true,
    trim: true,
  },

  lastName: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);


// BANK ACCOUNT SCHEMA
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  balance: {
    type: Number,
    required: true
  }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
  User,
  Account
};