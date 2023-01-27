import {
  fireEvent,
  renderWithProvider,
  screen,
} from "../../../../../utils/test";
import { ScreenItem, ScreenItemProps } from "./ScreenItem";

const mockClick = jest.fn();

const mockScreenItemProps = {
  name: "name_mock",
  onClick: mockClick as (() => void) | undefined,
} as ScreenItemProps;

it("Should render ScreenItem corectly", () => {
  renderWithProvider(<ScreenItem {...mockScreenItemProps} />);

  expect(screen.getByText(mockScreenItemProps.name)).toBeDefined();
});

it("Should trigger onClick corectly", () => {
  renderWithProvider(<ScreenItem {...mockScreenItemProps} />);

  fireEvent.click(screen.getByText(mockScreenItemProps.name));
  expect(mockClick).toBeCalled();
});
