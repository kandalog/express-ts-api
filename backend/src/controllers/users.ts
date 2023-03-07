import { Request, Response } from "express";
import { UsersService } from "../services/users";

const usersService = new UsersService();

export class UsersController {
  root(req: Request, res: Response) {
    const message = usersService.root();
    res.status(200).json({ message });
  }
}
