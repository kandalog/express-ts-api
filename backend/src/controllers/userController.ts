import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { NewUser } from "../models";

const userService = new UserService();

export class UsersController {
  async findAll(req: Request, res: Response) {
    try {
      const users = await userService.findAll();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async create(req: Request<{}, {}, NewUser>, res: Response) {
    try {
      const user = await userService.create(req.body);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
