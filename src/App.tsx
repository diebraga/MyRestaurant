import { Home } from "./pages/Home/Home";
import { Layout } from "./components/Layout/Layout";
import { Screen } from "./components/Screen/Screen";

const homeTitle = "MENU";
const homeOptons = [
  { title: "Food", id: "1" },
  { title: "Beers", id: "2" },
];

function App() {
  return (
    <Layout>
      <Home options={homeOptons} title={homeTitle} />
      {homeOptons.map((option) => (
        <Screen key={option.id} {...option} />
      ))}
    </Layout>
  );
}

export default App;
