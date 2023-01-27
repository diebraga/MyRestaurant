import { fireEvent, renderWithProvider, screen } from "../../../../utils/test";
import { QrCode } from "./QrCode";

const mockSubmtit = jest.fn();
const mockNavigate = jest.fn();

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useDisclosure: () => ({
    isOpen: true,
    onToggle: jest.fn()
  }),
}));

const mockProps = {
  buttonTitle: "buttonTitle",
  value: "value",
};

it("Should render QrCode", () => {
  renderWithProvider(<QrCode {...mockProps} />);

  expect(screen.getByText(mockProps.buttonTitle)).toBeDefined();
});
