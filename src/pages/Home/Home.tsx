import React from "react";
import { Button, Column, Heading } from "native-base";

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
      <Column
        width="100%"
        alignItems="center"
        space={4}
        bg="amber.100"
        minHeight="100vh"
        paddingX={["3", "8"]}
        justifyContent="center"
      >
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
  );
};

export { Home };
