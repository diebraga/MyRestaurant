import { renderWithProvider } from "../../utils/test";
import { BottomNav } from "./BottomNav";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

it("Should render bottom nav", () => {
  renderWithProvider(<BottomNav />);

  expect(true).toBeDefined();
});
