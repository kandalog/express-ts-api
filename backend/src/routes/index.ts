import express from "express";
import { IndexController } from "../controllers";

const indexController = new IndexController();
const router = express.Router();

router.get("/", indexController.findAll);

export default router;
