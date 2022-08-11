const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  servicesId: {
    ref: "Service",
    type: mongoose.SchemaTypes.ObjectId,
  },
  user: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId,
  },
  data: {
    type: Date,
    default: Date.now,
  },
  rating: Number,
  text: String,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
