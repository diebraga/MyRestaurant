import { createBrowserRouter } from "react-router-dom";
import { BottomNav } from "../components/BottomNav/BottomNav";
import { Home } from "../pages/Home/Home";
import { Menu } from "../pages/Menu/Menu";
import { NotFound } from "../pages/NotFound/NotFound";
import { SignIn } from "../pages/SignIn/SignIn";
import { Account } from "../pages/Account/Account";
import { AdminHeader } from "../components/AdminHeader/AdminHeader";

export const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <NotFound />,
  },
  {
    path: "/account",
    element: <AdminHeader />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/account",
        element: <Account />,
        errorElement: <NotFound />,
      },
      {
        path: "/account/menu",
        element: <Account />,
        errorElement: <NotFound />,
      },
    ],
  },
  {
    path: "/:userId",
    element: <BottomNav />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/:userId",
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/:userId/menu",
        element: <Menu />,
        errorElement: <NotFound />,
      },
      {
        path: "/:userId/cart",
        element: <div>cart</div>,
        errorElement: <NotFound />,
      },
    ],
  },
]);
