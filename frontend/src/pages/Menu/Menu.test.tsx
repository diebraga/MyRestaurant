import { Text } from "native-base";
import { renderWithProvider, screen } from "../../test";
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
