import express from "express";
import { UsersController } from "../controllers/userController";

const usersController = new UsersController();
const router = express.Router();

router.get("/", usersController.findAll);
router.post("/", usersController.create);

export default router;
