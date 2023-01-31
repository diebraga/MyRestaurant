import { Request, Response } from "express";
import { GetUsersMenuSectionsService } from "../../services/MenuSectionServices/GetUsersMenuSectionsService";

class GetUsersMenuSectionsController {
  async handle(request: Request, response: Response) {
    // @ts-ignore
    const userId = request["user_id"];

    const service = new GetUsersMenuSectionsService();

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

export { GetUsersMenuSectionsController };
