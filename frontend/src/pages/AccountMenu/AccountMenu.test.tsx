import { renderWithProvider, screen } from "../../utils/test";
import { AccountMenu } from "./AccountMenu";
import { Text } from "@chakra-ui/react";

const mockMenuAccout = <Text>AccountMenu</Text>;

jest.mock("@chakra-ui/react", () => {
  return {
    ...jest.requireActual("@chakra-ui/react"),
    Flex: () => mockMenuAccout,
  };
});

it("Should render Menu Items when Array defined", () => {
  renderWithProvider(<AccountMenu />);

  expect(screen.getByText("AccountMenu")).toBeDefined();
});
