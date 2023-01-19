import { Text } from "native-base";
import { renderWithProvider, screen } from "../../test";
import { Home } from "./Home";

const homeTitleMock = "Screen";

const mockHome = <Text>{homeTitleMock}</Text>;

jest.mock("../../components/Screen/Screen", () => {
  return {
    Screen: () => mockHome,
  };
});

it("Home should be defined", () => {
  renderWithProvider(<Home />);
  expect(screen.getAllByText(homeTitleMock)).toBeDefined();
});
