import { Request, Response } from "express";
import { SignUpUserService } from "../../services/AuthenticationServices/SignUpUserService";

class SignUpUserController {
  async handle(request: Request, response: Response) {
    const { email, password, name } = request.body;

    const service = new SignUpUserService();

    try {
      const result = await service.execute({
        name,
        password,
        email,
      });

      return response.status(200).json(result);
    } catch (error: any) {
      return response.status(422).json({ error: error.message });
    }
  }
}

export { SignUpUserController };
