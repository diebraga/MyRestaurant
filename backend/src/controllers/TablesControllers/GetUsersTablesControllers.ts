import { Request, Response } from "express";
import { GetUsersTablesService } from "../../services/TablesServices/GetUsersTablesService";

class GetUsersTablesController {
  async handle(request: Request, response: Response) {
    // @ts-ignore
    const userId = request["user_id"];

    const service = new GetUsersTablesService();

    try {
      const result = await service.execute({
        userId,
      });

      return response.status(200).json(result);
    } catch (error: any) {
      return response.status(422).json({ error: error.message });
    }
  }
}

export { GetUsersTablesController };
