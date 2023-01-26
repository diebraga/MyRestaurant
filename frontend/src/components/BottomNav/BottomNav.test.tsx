import { fireEvent, renderWithProvider, screen } from "../../test";
import { BottomNav } from "./BottomNav";
import { House } from "phosphor-react";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const mockProps = [{ id: "1", label: "label", path: "/", ItemIcon: House }];

it("Should render bottom nav", () => {
  renderWithProvider(<BottomNav />);

  expect(true).toBeDefined();
});
