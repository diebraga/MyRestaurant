import { renderWithProvider, screen } from "../../test";
import { Home, HomeProps } from "./Home";

const homeTitleMock = "MENU";
const homeOptonsMock = [
  { title: "Coffees", id: "1" },
  { title: "Beers", id: "2" },
];

const mockProps: HomeProps = {
  options: homeOptonsMock,
  title: homeTitleMock,
};

it("Title should be defined", () => {
  renderWithProvider(<Home {...mockProps} />);

  expect(screen.getByText(mockProps.title)).toBeDefined();
});
