const Router = require("express");
const { drugController } = require("../controllers/drugs.controller");

const router = Router();


router.post("/drug", drugController.postDrug)
router.get('/drug', drugController.getDrug)
router.delete('/drug/:id', drugController.delDrug)


module.exports = router;
