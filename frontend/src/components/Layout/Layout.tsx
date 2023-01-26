import { Flex } from "@chakra-ui/react";
import React from "react";
import { layoutMaxWidth } from "../../constants";

export type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex width="100%" minHeight="100vh" justify="center">
      <Flex maxWidth={layoutMaxWidth} flexDir="column" width="100%">
        {children}
      </Flex>
    </Flex>
  );
};

export { Layout };
