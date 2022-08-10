const Review = require("../models/Review");

module.exports.reviewController = {
  postReview: async (req, res) => {
    try {
      const data = await Review.create({
        servicesId: req.body.servicesId,
        user: req.user.id,
        rating: req.body.rating,
        text: req.body.text,
      });
      // console.log(data)
      res.json(data);
    } catch (error) {
      return res.status(401).json(`Ошибка: ${error.message}`);
    }
  },
  patchReview: async (req, res) => {
    try {
      const data = await Review.findByIdAndUpdate(
        req.params.id,
        {
          rating: req.body.rating,
          text: req.body.text,
        },
        { new: true }
      );
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  delReview: async (req, res) => {
    try {
      const review = await Review.findById(req.params.id);
      if (review.user.toString() === req.user.id || req.user.role === "admin") {
        await review.remove();
        return res.json(review);
      }
      return res.status(401).json({ error: "У вас нет доступа" });
    } catch (error) {
      return res.status(401).json(`Ошибка: ${error.message}`);
    }
  },
  getReview: async (req, res) => {
    try {
      const data = await Review.find({ servicesId: req.params.id });
      return res.json(data);
    } catch (error) {
      res.json({ error: error.message });
    }
  },
};
