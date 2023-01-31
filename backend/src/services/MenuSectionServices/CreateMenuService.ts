import prismaClient from "../../lib";

interface MenuSectionInterface {
  userId: number;
  name: string;
}

class CreateMenuSectionService {
  async execute({ userId, name }: MenuSectionInterface) {
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

    const createSectionResponse = createMenuSection;

    return createSectionResponse;
  }
}

export { CreateMenuSectionService };
