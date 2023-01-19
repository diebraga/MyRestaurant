import { Column, Heading } from "native-base";
import React from "react";
import { ScreenItem } from "./components/ScreenItem";

export type ScreenProps = {
  title: string
}

const Screen: React.FC<ScreenProps> = ({ title }) => {
  return (
    <Column
      width="100%"
      bg="amber.100"
      minHeight="100vh"
      alignItems="center"
      space={4}
      paddingX={["3", "8"]}
    >
      <Heading fontWeight="medium" fontSize={["4xl"]} color="primary.500">
        {title}
      </Heading>
      <ScreenItem />
    </Column>
  );
};

export { Screen };
