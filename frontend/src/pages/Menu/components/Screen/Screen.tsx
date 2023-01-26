import { VStack, Heading, Flex } from "@chakra-ui/react";
import React from "react";
import { ScreenItem } from "./components/ScreenItem";
import { Section } from "../../Menu";
import { safeMap } from "../../../../utils/safeMap/safeMap";

export type ScreenProps = Section;

const Screen: React.FC<ScreenProps> = ({ title, products }) => {
  return (
    <VStack
      width="100%"
      minHeight="65vh"
      spacing={4}
      align="start"
      marginTop="10"
      paddingX={["2", "3"]}
    >
      <Heading fontWeight="medium" fontSize={["4xl"]} marginLeft="4">
        {title}
      </Heading>
      <Flex direction={["column", "row"]}>
        {safeMap(products)?.map((product) => (
          <ScreenItem {...product} key={product.id} />
        ))}
      </Flex>
    </VStack>
  );
};

export { Screen };
