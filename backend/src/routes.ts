import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { DeleteUserByIdController } from "./controllers/DeleteUserByIdController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";
import { GetUserByIdController } from "./controllers/GetUserByIdController";
import { UpdateUserByIdController } from "./controllers/UpdateUserController";
import { ensuereIsAuthenticated } from "./middleware/ensureUserIsAuthenticated";
import { SignUpUserController } from "./controllers/SignUpUserController";
import { GetCurrentUserController } from "./controllers/GetCurrentUserController";

const router = Router();

router.get(
  "/user",
  ensuereIsAuthenticated,
  new GetCurrentUserController().handle
);

// router.delete('/users/:id',ensuereIsAuthenticated,  new DeleteUserByIdController().handle)

router.get("/users", new GetAllUsersController().handle);

router.put(
  "/users/:id",
  ensuereIsAuthenticated,
  new UpdateUserByIdController().handle
);

router.post("/signup", new SignUpUserController().handle);

router.post("/signin", new AuthenticateUserController().handle);

export { router };
