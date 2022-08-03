const { Router } = require("express");
const { serviceController } = require("../controllers/services.controller");

const router = Router()

router.post('/services', serviceController.postService)
router.get('/services', serviceController.getService)

module.exports = router