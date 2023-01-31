import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticationControllers.ts/AuthenticateUserController";
import { SignUpUserController } from "./controllers/AuthenticationControllers.ts/SignUpUserController";
import { CreateMenuSectionController } from "./controllers/MenuSectionControllers/CreateMenuSectionController";
import { DeleteUsersMenuSectionController } from "./controllers/MenuSectionControllers/DeleteUsersMenuSectionController";
import { GetUsersMenuSectionsController } from "./controllers/MenuSectionControllers/GetUsersMenuSectionsController";
import { GetAllUsersController } from "./controllers/UserControllers/GetAllUsersController";
import { GetCurrentUserController } from "./controllers/UserControllers/GetCurrentUserController";
import { UpdateUserByIdController } from "./controllers/UserControllers/UpdateUserController";
import { ensuereIsAuthenticated } from "./middleware/ensureUserIsAuthenticated";

const router = Router();

// USERS ROUTES
router.get(
  "/user",
  ensuereIsAuthenticated,
  new GetCurrentUserController().handle
);

router.get("/users", new GetAllUsersController().handle);

router.put(
  "/users/:id",
  ensuereIsAuthenticated,
  new UpdateUserByIdController().handle
);

// AUTHENTICATION ROUTES
router.post("/signup", new SignUpUserController().handle);

router.post("/signin", new AuthenticateUserController().handle);

// MENU SECTION ROUTES

router.post(
  "/menu-section",
  ensuereIsAuthenticated,
  new CreateMenuSectionController().handle
);

router.get(
  "/menu-section",
  ensuereIsAuthenticated,
  new GetUsersMenuSectionsController().handle
);

router.delete(
  "/menu-section/:id",
  ensuereIsAuthenticated,
  new DeleteUsersMenuSectionController().handle
);

export { router };
