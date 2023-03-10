import { Text } from "@chakra-ui/react";
import { renderWithProvider, screen } from "../../utils/test";
import { Layout, LayoutProps } from "./Layout";

const mockChildrenLabel = "children mock";
const mockChildren = <Text>{mockChildrenLabel}</Text>;

const mockLayoutProps: LayoutProps = {
  children: mockChildren,
};

it("Should render children", () => {
  renderWithProvider(<Layout>{mockLayoutProps.children}</Layout>);

  expect(screen.getByText(mockChildrenLabel)).toBeDefined();
});
