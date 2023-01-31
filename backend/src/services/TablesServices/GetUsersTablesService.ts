import prismaClient from "../../lib";

class GetUsersTablesService {
  async execute({ userId }: { userId: number }) {
    if (!userId) {
      throw new Error("User id must be provided!");
    }

    const menuSections = await prismaClient.table.findMany({
      where: {
        userId: Number(userId),
      },
      orderBy: {
        updatedAt: "asc",
      },
    });

    return menuSections;
  }
}

export { GetUsersTablesService };
