import { Request, Response } from "express";
import { DeleteUsersTableService } from "../../services/TablesServices/DeleteUsersTableService";

class DeleteUsersTableController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;
    // @ts-ignore
    const userId = request["user_id"];

    const service = new DeleteUsersTableService();

    try {
      const result = await service.execute({
        user_id: Number(userId),
        id: Number(id),
      });
      return response.json(result);
    } catch (error: any) {
      return response.status(500).json({ error: error.message });
    }
  }
}

export { DeleteUsersTableController };
