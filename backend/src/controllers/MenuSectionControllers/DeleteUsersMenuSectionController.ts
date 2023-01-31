import { Request, Response } from "express";
import { DeleteUsersMenuSectionService } from "../../services/MenuSectionServices/DeleteUsersMenuSection";

class DeleteUsersMenuSectionController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;
    // @ts-ignore
    const userId = request["user_id"];

    const service = new DeleteUsersMenuSectionService();

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

export { DeleteUsersMenuSectionController };
