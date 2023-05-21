const express = require("express");
const app = express();
const userRouter = express.Router();

const { saveUser, getUser } = require("../controller/user.controller");

userRouter.post("/", saveUser);
userRouter.get("/", getUser);

module.exports = { userRouter };