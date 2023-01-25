import { renderWithProvider, screen } from "../../../../test";
import { Screen, ScreenProps } from "./Screen";

const mockScreenProps: ScreenProps = {
  title: "title_mock",
  id: "1",
  products: [
    {
      description: "description",
      id: "id",
      imgUri: "img",
      name: "name",
      price: 0,
    },
  ],
};

it("Should render Screen corectly", () => {
  renderWithProvider(<Screen {...mockScreenProps} />);

  expect(screen.getByText(mockScreenProps.title)).toBeDefined();
});
