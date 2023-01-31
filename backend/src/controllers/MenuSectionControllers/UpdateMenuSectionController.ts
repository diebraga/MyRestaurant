import { Request, Response } from "express";
import { UpdateMenuSectionService } from "../../services/MenuSectionServices/UpdateMenuService";

class UpdateMenuSectionController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    // @ts-ignore
    const userId = request["user_id"];
    const id  = request.params.id

    const service = new UpdateMenuSectionService();

    try {
      const result = await service.execute({
        name,
        userId,
        id: Number(id)
      });

      return response.status(200).json(result);
    } catch (error: any) {
      return response.status(422).json({ error: error.message });
    }
  }
}

export { UpdateMenuSectionController };
