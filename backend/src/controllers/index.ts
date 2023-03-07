import { Request, Response } from "express";
import { IndexService } from "../services";

const indexService = new IndexService();

export class IndexController {
  root(req: Request, res: Response) {
    const message = indexService.root();
    res.status(200).json({ message });
  }
}
