import prismaClient from "../../lib";

class GetUsersMenuSectionsService {
  async execute({ userId }: { userId: number }) {
    if (!userId) {
      throw new Error("User id must be provided!");
    }

    const menuSections = await prismaClient.menuSection.findMany({
      where: {
        userId: Number(userId),
      },
      include: {
        menuItems: true,
      },
      orderBy: {
        updatedAt: "asc"
      },
    });

    return menuSections;
  }
}

export { GetUsersMenuSectionsService };
