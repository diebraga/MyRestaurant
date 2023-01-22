import { Column, Heading } from "native-base";
import React from "react";
import { ScreenItem } from "./components/ScreenItem";
import { Section } from "../../Home";
import { safeMap } from "../../../../utils/safeMap/safeMap";

export type ScreenProps = Section;

const Screen: React.FC<ScreenProps> = ({ title, products }) => {
  return (
    <Column
      width="100%"
      minHeight="100vh"
      alignItems="center"
      space={4}
      paddingX={["3", "8"]}
    >
      <Heading fontWeight="medium" fontSize={["4xl"]} color="primary.500">
        {title}
      </Heading>
      {safeMap(products)?.map((product) => (
        <ScreenItem {...product} />
      ))}
    </Column>
  );
};

export { Screen };
