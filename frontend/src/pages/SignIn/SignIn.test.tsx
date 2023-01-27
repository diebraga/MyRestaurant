import { fireEvent, renderWithProvider, screen } from "../../utils/test";
import { SignIn } from "./SignIn";

const mockSubmtit = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  Controller: () => <></>,
  useForm: () => ({
    handleSubmit: () => mockSubmtit,
    formState: {},
    register: jest.fn(),
  }),
}));

it("Should render login", () => {
  renderWithProvider(<SignIn />);

  expect(screen.getByText("Login")).toBeDefined();
});

it("Should fire onSubmit", () => {
  renderWithProvider(<SignIn />);
  fireEvent.submit(screen.getByText("SignIn"));
  expect(mockSubmtit).toBeCalled();
});
