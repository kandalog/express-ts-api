import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export class IndexService {
  root(): string {
    return "root";
  }
}
