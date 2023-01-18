import { Flex } from "native-base";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Flex width="100%" minHeight="100vh" alignItems="center">
      <Flex maxWidth="650px" flexDir="column" width="100%">
        <Home />
      </Flex>
    </Flex>
  );
}

export default App;
