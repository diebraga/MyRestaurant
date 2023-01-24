import { fireEvent, renderWithProvider, screen } from "../../../test";
import { BottomNavItem, BottomNavItemProps } from "./BottomNavItem";

const mockedPress = jest.fn();

const mockProps: BottomNavItemProps = {
  isSelected: true,
  label: "label",
  onPress: mockedPress,
};

it("Should render bottom nav item", () => {
  renderWithProvider(<BottomNavItem {...mockProps} />);

  expect(screen.getByText(mockProps.label)).toBeDefined();
});

it("Should fire button onPress", () => {
  renderWithProvider(<BottomNavItem {...mockProps} />);

  fireEvent.click(screen.getByRole("button"));
  expect(mockedPress).toBeDefined();
});
