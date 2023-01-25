import { createBrowserRouter } from "react-router-dom";
import { BottomNav } from "../components/BottomNav/BottomNav";
import { Home } from "../pages/Home/Home";
import { Menu } from "../pages/Menu/Menu";
import { NotFound } from "../pages/NotFound/NotFound";
import { House, Notebook, BagSimple } from "phosphor-react";
import { SignIn } from "../pages/SignIn/SignIn";

export const bottomNavItems = [
  {
    id: "1",
    label: "Home",
    path: "",
    ItemIcon: House,
  },
  {
    id: "2",
    label: "Menu",
    path: "/menu",
    ItemIcon: Notebook,
  },
  {
    id: "3",
    label: "Cart",
    path: "/cart",
    ItemIcon: BagSimple,
  },
];

export const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <NotFound />,
  },
  {
    path: "/:userId",
    element: <BottomNav items={bottomNavItems} />,
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
