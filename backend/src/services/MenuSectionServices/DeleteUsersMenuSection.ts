import prismaClient from "../../lib";

class DeleteUsersMenuSectionService {
  async execute({ user_id, id }: { user_id: number; id: number }) {
    if (!user_id) {
      throw new Error("User id required!");
    }

    if (!id) {
      throw new Error("Item id required!");
    }

    const menuSection = await prismaClient.menuSection.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (menuSection?.userId !== user_id) {
      throw new Error("Section not found!");
    }

    const deletedMenuSection = await prismaClient.menuSection.delete({
      where: {
        id: Number(id),
      },
    });

    return {
      ...deletedMenuSection,
      message: "Menu section deleted",
    };
  }
}

export { DeleteUsersMenuSectionService };
