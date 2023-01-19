import { renderWithProvider, screen } from "../../../../test";
import { Screen, ScreenProps } from "./Screen";

const mockScreenProps = {
  title: "title_mock",
} as ScreenProps;

it("Should render Screen corectly", () => {
  renderWithProvider(<Screen {...mockScreenProps} />);

  expect(screen.getByText(mockScreenProps.title)).toBeDefined();
});
