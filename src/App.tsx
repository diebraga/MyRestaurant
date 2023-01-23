import { Home } from "./pages/Home/Home";
import { Layout } from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import { Center, Flex, Pressable } from "native-base";
import { Outlet } from "react-router-dom";
import { BottomNav } from "./components/BottomNav/BottomNav";

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
