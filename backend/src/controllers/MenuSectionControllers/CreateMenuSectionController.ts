import { Request, Response } from "express";
import { CreateMenuSectionService } from "../../services/MenuSectionServices/CreateMenuService";

class CreateMenuSectionController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;
    // @ts-ignore
    const userId = request["user_id"];

    const service = new CreateMenuSectionService();

    try {
      const result = await service.execute({
        name,
        userId
      });

      return response.status(200).json(result);
    } catch (error: any) {
      return response.status(422).json({ error: error.message });
    }
  }
}

export { CreateMenuSectionController };
