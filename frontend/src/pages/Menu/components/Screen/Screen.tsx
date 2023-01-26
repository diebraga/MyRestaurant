import { VStack, Heading } from "@chakra-ui/react";
import React from "react";
import { ScreenItem } from "./components/ScreenItem";
import { Section } from "../../Menu";
import { safeMap } from "../../../../utils/safeMap/safeMap";

export type ScreenProps = Section;

const Screen: React.FC<ScreenProps> = ({ title, products }) => {
  return (
    <VStack width="100%" minHeight="100vh" spacing={4} justifySelf="center">
      <Heading fontWeight="medium" fontSize={["4xl"]}>
        {title}
      </Heading>
      {safeMap(products)?.map((product) => (
        <ScreenItem {...product} key={product.id} />
      ))}
    </VStack>
  );
};

export { Screen };
