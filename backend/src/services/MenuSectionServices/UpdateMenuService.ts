import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../lib";

interface UserInterface {
  userId: number;
  name: string;
  id: number
}

class UpdateMenuSectionService {
  async execute({ userId, name, id }: UserInterface) {
    if (!userId) {
      throw new Error("User does not exists!");
    }

    if (!name) {
      throw new Error("Name must be provided!");
    }

    if (!id) {
      throw new Error("Item id must be provided!");
    }

    const updateMenuSection = await prismaClient.menuSection.update({
      where: {
        id: id
      },
      data: {
        userId,
        name
      }
    });

    const updateUserResponse = updateMenuSection;

    return updateUserResponse;
  }
}

export { UpdateMenuSectionService };
