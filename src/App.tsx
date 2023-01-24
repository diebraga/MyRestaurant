import { Home } from "./pages/Home/Home";
import { Layout } from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import { BottomNav } from "./components/BottomNav/BottomNav";
import { Menu } from "./pages/Menu/Menu";

const router = createBrowserRouter([
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
