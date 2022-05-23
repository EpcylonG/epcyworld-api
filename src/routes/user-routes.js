const { Router } = require("express");
const userRouter = new Router();
const { userController } = require("../controllers");
const { authMiddleware } = require("../middleware/auth-middleware");


userRouter.get("/profile", authMiddleware, userController.getUserData);
userRouter.get("/login", authMiddleware, userController.getUserData);

userRouter.post("/signup", userController.createUser);

module.exports = { userRouter };