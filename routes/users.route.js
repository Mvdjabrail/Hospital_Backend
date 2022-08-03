const { Router } = require("express");
const { check } = require("express-validator");
const { userController } = require("../controllers/users.controller");
const router = Router();

router.get("/user", userController.getUser);
router.post(
  "/user",
  [
    check("login", "Имя пользователя не может быть пустым").notEmpty(),
    check(
      "password",
      "Пароль должен быть больше 4 и меньше 10 символов"
    ).isLength({ min: 4, max: 10 }),
  ],
  userController.postUser
);
router.post(
  "/email",
  [check("email", "Неверный email").normalizeEmail().isEmail()],
  userController.getKey
);
router.post("/login", userController.login);
router.patch("/user/:id", userController.patchUser);
router.delete("/user/:id", userController.deleteUser);

module.exports = router;
