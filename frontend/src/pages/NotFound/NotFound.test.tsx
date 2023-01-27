import { renderWithProvider, screen } from "../../utils/test";
import { NotFound } from "./NotFound";

const notFoundTitleMock = "Oops!";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useRouteError: () => jest.fn(),
}));

it("NotFound should be defined", () => {
  renderWithProvider(<NotFound />);
  expect(screen.getByText(notFoundTitleMock)).toBeDefined();
});
