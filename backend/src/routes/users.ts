import express from "express";
import { UsersController } from "../controllers/users";

const usersController = new UsersController();
const router = express.Router();

router.get("/", usersController.root);

export default router;
