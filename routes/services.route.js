const { Router } = require("express");
const { serviceController } = require("../controllers/services.controller");
const fileMiddleware = require("../middlewares/fileMiddleware");

const router = Router()

router.post('/services',fileMiddleware.single("image"), serviceController.postService)
router.get('/services', serviceController.getService)

module.exports = router