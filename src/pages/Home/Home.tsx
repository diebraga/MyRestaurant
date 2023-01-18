import React from "react";
import { Button, Column, Flex, HStack, Heading, VStack } from "native-base";

type Option = {
  title: string;
  id: string;
};

export type HomeProps = {
  title: string;
  options: Option[];
};

const Home: React.FC<HomeProps> = ({ title, options }) => {
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
          {title}
        </Heading>
        {options.map((option) => {
          return (
            <Button
              key={option.id}
              variant="outline"
              borderRadius="full"
              width="100%"
            >
              {option.title}
            </Button>
          );
        })}
      </Column>
    </Flex>
  );
};

export { Home };
