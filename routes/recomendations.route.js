const { Router } = require("express");
const { recommendationController } = require("../controllers/recomendations.controller");

const router = Router()

router.post('/recommendations', recommendationController.postRecom)
router.get('/recommendations', recommendationController.getRecom)
router.delete('/recommendations/:id', recommendationController.delRecom)

module.exports = router
