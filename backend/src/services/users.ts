import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export class UsersService {
  root(): string {
    return "users";
  }
}
