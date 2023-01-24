import { Home } from "./pages/Home/Home";
import { Layout } from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { Menu } from "./pages/Menu/Menu";

export const bottomNavItems = [
  {
    id: "1",
    label: "Home",
    path: "",
  },
  {
    id: "2",
    label: "Menu",
    path: "/menu",
  },
  {
    id: "3",
    label: "Cart",
    path: "/cart",
  },
];

const router = createBrowserRouter([
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

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
