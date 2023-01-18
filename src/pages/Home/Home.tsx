import React from "react";
import { Button, Column, Flex, HStack, Heading, VStack } from "native-base";

const Home: React.FC = () => {
  return (
    <Flex
      width="100%"
      bg="amber.100"
      justify="center"
      minHeight="100vh"
      paddingX={["3", "8"]}
    >
      <Column width="100%" alignItems="center" space={4}>
        <Heading fontWeight="medium" fontSize={["4xl"]} color="primary.500">
          MENU
        </Heading>
        <Button variant="outline" borderRadius="full" width="100%">
          Beers
        </Button>
        <Button variant="outline" borderRadius="full" width="100%">
          Food
        </Button>
      </Column>
    </Flex>
  );
};

export { Home };
