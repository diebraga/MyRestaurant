import { Flex } from "native-base";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Flex width="100%" bg="red.100" minHeight="100vh" alignItems="center">
      <Flex maxWidth="650px" flexDir="column" bg="amber.300" width="100%">
        <Home />
      </Flex>
    </Flex>
  );
}

export default App;
