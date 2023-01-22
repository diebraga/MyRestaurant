import { fireEvent, renderWithProvider, screen } from "../../../../../test";
import { ScreenItem, ScreenItemProps } from "./ScreenItem";

const mockClick = jest.fn();

const mockScreenItemProps = {
  name: "name_mock",
  onPress: mockClick as (() => void) | undefined,
} as ScreenItemProps;

it("Should render ScreenItem corectly", () => {
  renderWithProvider(<ScreenItem {...mockScreenItemProps} />);

  expect(screen.getByText(mockScreenItemProps.name)).toBeDefined();
});

it("Should trigger onPress corectly", () => {
  renderWithProvider(<ScreenItem {...mockScreenItemProps} />);

  fireEvent.click(screen.getByText(mockScreenItemProps.name));
  expect(mockClick).toBeCalled();
});
