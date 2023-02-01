import prismaClient from "../../lib";

class DeleteUsersTableService {
  async execute({ user_id, id }: { user_id: number; id: number }) {
    if (!user_id) {
      throw new Error("User id required!");
    }

    if (!id) {
      throw new Error("Item id required!");
    }

    const table = await prismaClient.table.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (table?.userId !== user_id) {
      throw new Error("Section not found!");
    }

    const deletedTable = await prismaClient.table.delete({
      where: {
        id: Number(id),
      },
    });

    return {
      ...deletedTable,
      message: "Table section deleted",
    };
  }
}

export { DeleteUsersTableService };
