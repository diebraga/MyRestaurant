import { Request, Response } from "express";
import { CreateTableService } from "../../services/TablesServices/CreateTableService";

class CreateTableController {
  async handle(request: Request, response: Response) {
    const { nO } = request.body;
    // @ts-ignore
    const userId = request["user_id"];

    const service = new CreateTableService();

    try {
      const result = await service.execute({
        nO: Number(nO),
        userId: Number(userId)
      });

      return response.status(200).json(result);
    } catch (error: any) {
      return response.status(422).json({ error: error.message });
    }
  }
}

export { CreateTableController };
