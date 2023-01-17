import { Box } from "native-base";

function App() {
  return (
    <Box
      justifyContent="center" // bg="primary.500"
      _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
        letterSpacing: "lg",
      }}
      bg={["red.400", "blue.400"]}
    >
      This is a Box
    </Box>
  );
}

export default App;
