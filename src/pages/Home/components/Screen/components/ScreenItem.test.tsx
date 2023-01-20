import { renderWithProvider, screen } from "../../../../../test";
import { ScreenItem, ScreenItemProps } from "./ScreenItem";

const mockScreenItemProps = {
  name: "name_mock"
} as ScreenItemProps

it("Should render ScreenItem corectly", () => {
  renderWithProvider(<ScreenItem {...mockScreenItemProps} />);

  expect(screen.getByText(mockScreenItemProps.name)).toBeDefined();
});
