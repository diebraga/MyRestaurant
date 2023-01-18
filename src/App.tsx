import { Home } from "./pages/Home/Home";
import { Layout } from "./components/Layout/Layout";

const homeTitle = "MENU";
const homeOptons = [
  { title: "Food", id: "1" },
  { title: "Beers", id: "2" },
];

function App() {
  return (
    <Layout>
      <Home options={homeOptons} title={homeTitle} />
    </Layout>
  );
}

export default App;
