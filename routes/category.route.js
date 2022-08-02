const Router = require("express");
const { categoryController } = require("../controllers/categories.controller");

const router = Router();


router.post("/category", categoryController.postCategoryController)
router.get("/category", categoryController.getCategoryController)
router.patch("/category/:id", categoryController.patchCategoryController)
router.delete("/category/:id", categoryController.deleteCategoryController)

module.exports = router;
