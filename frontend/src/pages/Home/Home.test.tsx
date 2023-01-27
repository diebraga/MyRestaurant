import { renderWithProvider, screen } from "../../utils/test";
import { Home } from "./Home";

const homeTitle = "LOGO";

it("Home should be defined", () => {
  renderWithProvider(<Home />);
  expect(screen.getAllByText(homeTitle)).toBeDefined();
});
