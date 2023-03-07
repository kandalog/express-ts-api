// Controllerとメソッド名がかぶるためClassで定義する
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export class IndexService {
  async findAll(): Promise<User[]> {
    return await prisma.user.findMany();
  }
}
