import { renderWithProvider, screen } from "../../../../utils/test";
import { CreateNewSectionForm } from "./CreateNewSectionForm";

it.only("Should render form", () => {
  renderWithProvider(<CreateNewSectionForm />);

  expect(screen.getByText("Create menu section")).toBeDefined();
});

