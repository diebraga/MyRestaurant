import { renderWithProvider, screen } from "../../../../utils/test";
import { MenuSections } from "./MenuSections";

const sectionsMocks = [
  {
    id: "id",
    title: "title",
    quantity: 2,
  },
];

it("Should render Menu Items when Array defined", () => {
  renderWithProvider(<MenuSections sections={sectionsMocks} />);

  expect(screen.getByText(sectionsMocks[0].title)).toBeDefined();
});

it("Should render create new section when array not defi ed", () => {
  renderWithProvider(<MenuSections />);

  expect(screen.getByText("Please create a new section")).toBeDefined();
});
