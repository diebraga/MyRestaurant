import { Flex } from "native-base";
import React from "react";

export type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex width="100%" minHeight="100vh" alignItems="center">
      <Flex maxWidth="650px" flexDir="column" width="100%">
        {children}
      </Flex>
    </Flex>
  );
};

export { Layout };
