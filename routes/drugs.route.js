const Router = require("express");
const { drugController } = require("../controllers/drugs.controller");
const fileMiddleware = require("../middlewares/fileMiddleware");

const router = Router();


router.post("/drug",fileMiddleware.single("image"), drugController.postDrug)
router.get('/drug', drugController.getDrug)
router.delete('/drug/:id', drugController.delDrug)


module.exports = router;
