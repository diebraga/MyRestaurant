import { Column, Heading } from "native-base";
import React from "react";
import { ScreenItem } from "./components/ScreenItem";
import { Section } from "../../Menu";
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
      <Heading fontWeight="medium" fontSize={["4xl"]}>
        {title}
      </Heading>
      {safeMap(products)?.map((product) => (
        <ScreenItem {...product} key={product.id} />
      ))}
    </Column>
  );
};

export { Screen };
