import express from "express";
import { UsersController } from "../controllers/userController";

const usersController = new UsersController();
const router = express.Router();

router.get("/", usersController.root);

export default router;
