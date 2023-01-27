import { Text } from "@chakra-ui/react";
import { renderWithProvider, screen } from "../../utils/test";
import { Menu } from "./Menu";

const menuTitleMock = "Screen";

const mockMenu = <Text>{menuTitleMock}</Text>;

jest.mock("./components/Screen/Screen", () => {
  return {
    Screen: () => mockMenu,
  };
});

it("Home should be defined", () => {
  renderWithProvider(<Menu />);
  expect(screen.getAllByText(menuTitleMock)).toBeDefined();
});
