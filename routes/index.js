const { Router } = require("express");

const router = Router();

router.use(require("./carts.route"));
router.use(require("./category.route"));
router.use(require("./drugs.route"));
router.use(require("./recomendations.route"));
router.use(require("./reviews.route"));
router.use(require("./services.route"));
router.use(require("./users.route"));
router.use(require("./callRieq.route"));

module.exports = router;
