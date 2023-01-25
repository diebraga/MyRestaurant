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
  renderWithProvider(<BottomNav items={mockProps} />);

  expect(screen.getAllByText(mockProps[0].label)).toBeDefined();
});

it("Sh", () => {
  renderWithProvider(<BottomNav items={mockProps} />);

  fireEvent.click(screen.getByRole("button"))
  expect(mockedUsedNavigate).toHaveBeenCalled();
});
