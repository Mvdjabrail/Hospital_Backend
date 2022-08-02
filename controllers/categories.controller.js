const Category = require("../models/Category");

module.exports.categoryController = {
  postCategoryController: async (req, res) => {
    try {
      const { title } = req.body;
      const category = await Category.create({
        title,
      });
      const data = await res.json(category);
    } catch (error) {
      res.json(error.message);
    }
  },

  getCategoryController: async (req, res) => {
    try {
      const { title } = req.body;
      const category = await Category.find();
      const data = await res.json(category);
    } catch (error) {
      res.json(error.message);
    }
  },

  patchCategoryController: async (req, res) => {
    try {
      const { title } = req.body;
      const category = await Category.findByIdAndUpdate(req.params.id, {
        title,
      }, {new: true});
      const data = await res.json(category)
    } catch (error) {
    throw  res.json(error.message);
    }
  },

  deleteCategoryController: async (req, res) => {
    try {
      const { title } = req.body;
      const category = await Category.findByIdAndRemove(req.params.id);
      res.json("Категории лекарств удаленны");
    } catch (error) {
      res.json(error.message);
    }
  },
};
