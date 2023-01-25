import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";

export const renderWithProvider = (children: React.ReactNode): RenderResult => {
  return render(
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
};
