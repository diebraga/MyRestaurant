import { Layout } from "./components/Layout/Layout";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
