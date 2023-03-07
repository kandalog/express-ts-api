import { Request, Response } from "express";
import { IndexService } from "../services";

const indexService = new IndexService();

export class IndexController {
  async findAll(req: Request, res: Response) {
    try {
      const users = await indexService.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}