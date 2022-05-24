const { Router } = require("express");
const userRouter = new Router();
const { userController } = require("../controllers");
const { authMiddleware } = require("../middleware/auth-middleware");

userRouter.use(authMiddleware)

userRouter.get("/profile/:userId", userController.getUserData);
userRouter.get("/login", userController.loginUser);

userRouter.post("/signup", userController.createUser);

module.exports = { userRouter };