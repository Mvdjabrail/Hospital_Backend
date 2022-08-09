const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  service: {
    ref: "service",
    type: mongoose.SchemaTypes.ObjectId,
  },
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
  total: {
    type: Number,
    default: 0,
  },
  isRecepte: {
    type: Boolean,
    default: false
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
