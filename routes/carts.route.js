const Router = require("express");
const { cartController } = require("../controllers/carts.controller");
const authMiddleware = require("../middlewares/authMiddleware");

const router = Router();


router.patch("/user/cart/:id", authMiddleware, cartController.addDrugs)
router.patch('/cart/:id', authMiddleware, cartController.clearnCart)
router.patch('/user/:userId/cart/:id', cartController.buyDrugs)
router.patch('/cash/:id', authMiddleware, cartController.topUpCash)
router.patch('/plus/cart/:id', cartController.plusCartItem)
router.get('/cart', cartController.getCart)


module.exports = router;
