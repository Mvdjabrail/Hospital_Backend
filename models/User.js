const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  login: {
    type: String,
    unique: true,
  },
  password: String,
  firstName: String,
  lastName: String,
  role: {
    type: String,
    default: "user",
  },
  sum: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
