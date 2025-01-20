import express from "express";
import {
  userRegister,
  userLogin,
  logout,
} from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/register", userRegister);
authRouter.post("/login", userLogin);
authRouter.post("/logout", logout);

export default authRouter;
