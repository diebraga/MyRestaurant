import React from "react";
import { VStack, Heading } from "@chakra-ui/react";

const homeTitle = "LOGO";

const Home: React.FC = () => {
  return (
    <>
      <VStack
        width="100%"
        alignItems="center"
        spacing={4}
        minHeight="100vh"
        paddingX={["3", "8"]}
        justifyContent="center"
      >
        <Heading fontWeight="medium" fontSize={["4xl"]}>
          {homeTitle}
        </Heading>
      </VStack>
    </>
  );
};

export { Home };
