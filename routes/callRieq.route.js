const Router = require("express");
const { callRieqController } = require("../controllers/callRieqConteyner");
const { body } = require("express-validator");

const router = Router();

router.post("/callRieq",   body('email').isEmail().normalizeEmail(), callRieqController.postCallRieq);
router.get("/callRieq", callRieqController.getCallRieq);
router.get("/callRieq/:id", callRieqController.getCallRieqId);
router.delete("/callRieq/:id", callRieqController.deleteCallRieq);

module.exports = router;
