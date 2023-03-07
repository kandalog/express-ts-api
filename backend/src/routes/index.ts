import express from "express";
import { IndexService } from "../services";
import { findAll } from "../controllers";

// const indexService = new IndexService();
// const indexController = new IndexController(indexService);

const router = express.Router();

router.get("/", findAll);

export default router;
