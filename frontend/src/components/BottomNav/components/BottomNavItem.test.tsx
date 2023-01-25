import { fireEvent, renderWithProvider, screen } from "../../../test";
import { BottomNavItem, BottomNavItemProps } from "./BottomNavItem";
import { House } from "phosphor-react";

const mockedPress = jest.fn();

const mockProps: BottomNavItemProps = {
  isSelected: true,
  label: "label",
  onClick: mockedPress,
  ItemIcon: House
};

it("Should render bottom nav item", () => {
  renderWithProvider(<BottomNavItem {...mockProps} />);

  expect(screen.getByText(mockProps.label)).toBeDefined();
});

it("Should fire button onClick", () => {
  renderWithProvider(<BottomNavItem {...mockProps} />);

  fireEvent.click(screen.getByRole("button"));
  expect(mockedPress).toBeDefined();
});
