import { Avatar, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Product } from "../../../Menu";

export type ScreenItemProps = Product & {
  onClick?: () => void;
};

const ScreenItem: React.FC<ScreenItemProps> = ({
  name,
  description,
  imgUri,
  price,
  onClick,
}) => {
  return (
    <Flex onClick={onClick}>
      <Stack
        overflow="hidden"
        width={["100%"]}
        shadow="1"
        borderRadius="md"
        padding="3"
        direction={["row", "column"]}
        boxShadow="sm"
      >
        <Flex justify="center" align="center">
          <Avatar src={imgUri} size="xl" />
        </Flex>
        <Stack
          flex="1"
          padding="1"
          marginLeft="2"
          justifyContent="space-around"
        >
          <Heading
            size="sm"
          >
            {name}
          </Heading>
          <Text fontWeight="400">
            {description}
          </Text>
          <Text
            fontWeight="400"
            fontSize="lg"
            paddingRight="2"
          >
            ${price}
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

export { ScreenItem };
