import React from "react";
import { Button, Column, Heading } from "native-base";
import { Screen } from "../../components/Screen/Screen";

const homeTitle = "MENU";
const homeOptons = [
  { title: "Food", id: "1" },
  { title: "Beers", id: "2" },
];

type Option = {
  title: string;
  id: string;
};

export type HomeProps = {
  title: string;
  options: Option[];
};

const Home: React.FC = () => {
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
        {homeTitle}
      </Heading>
      {homeOptons.map((option) => {
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
      {homeOptons.map((option) => (
        <Screen key={option.id} {...option} />
      ))}
    </Column>
  );
};

export { Home };
