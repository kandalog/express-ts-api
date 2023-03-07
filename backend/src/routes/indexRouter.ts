import express from "express";
import { IndexController } from "../controllers/indexController";

const indexController = new IndexController();
const router = express.Router();

router.get("/", indexController.root);

export default router;
