import { PrismaClient, User } from "@prisma/client";
import { NewUser } from "../models";

const prisma = new PrismaClient();

export class UserService {
  async findAll(): Promise<User[]> {
    return await prisma.user.findMany();
  }

  async create(newUser: NewUser): Promise<User> {
    return await prisma.user.create({
      data: newUser,
    });
  }
}
