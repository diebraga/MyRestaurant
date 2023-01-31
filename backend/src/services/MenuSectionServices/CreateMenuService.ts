import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../lib";

interface UserInterface {
  userId: number;
  name: string;
}

class CreateMenuSectionService {
  async execute({ userId, name }: UserInterface) {
    if (!userId) {
      throw new Error("User does not exists!");
    }

    if (!name) {
      throw new Error("Name must be provided!");
    }

    const createMenuSection = await prismaClient.menuSection.create({
      data: {
        name,
        userId: Number(userId),
      },
    });

    const createUserResponse = createMenuSection;

    return createUserResponse;
  }
}

export { CreateMenuSectionService };
