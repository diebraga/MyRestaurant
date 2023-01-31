import prismaClient from "../../lib";

interface CreateTableInterface {
  userId: number;
  nO: number;
}

class CreateTableService {
  async execute({ userId, nO }: CreateTableInterface) {
    if (!userId) {
      throw new Error("User does not exists!");
    }

    if (!nO) {
      throw new Error("Name must be provided!");
    }

    const createTable = await prismaClient.table.create({
      data: {
        nO: Number(nO),
        userId: Number(userId),
      },
    });

    const createTableResponse = createTable;

    return createTableResponse;
  }
}

export { CreateTableService };
