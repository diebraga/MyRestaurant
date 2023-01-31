import { renderWithProvider, screen } from "../../../../utils/test";
import { CreateNewSectionForm } from "./CreateNewSectionForm";

it.only("Should render form", () => {
  renderWithProvider(<CreateNewSectionForm mutateMenuSection={jest.fn()} />);

  expect(screen.getByText("Create menu section")).toBeDefined();
});
