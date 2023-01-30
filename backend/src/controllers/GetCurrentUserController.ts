import { Request, Response } from "express";
import { GetUserByIdService } from "../services/GetUserByIdService";

class GetCurrentUserController {
  async handle(request: Request, response: Response) {
    // @ts-ignore
    const userId = request["user_id"];

    const service = new GetUserByIdService();

    try {
      const result = await service.execute(Number(userId));

      return response.status(200).json(result);
    } catch (error: any) {
      return response.status(404).json({ message: error.message });
    }
  }
}

export { GetCurrentUserController };
