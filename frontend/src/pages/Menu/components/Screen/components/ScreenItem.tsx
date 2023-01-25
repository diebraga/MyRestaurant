import { Avatar, Flex, Heading, Button, Stack, Text } from "@chakra-ui/react";
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
    <Button onClick={onClick}>
      <Stack
        direction={{ base: "column", xs: "row" }}
        overflow="hidden"
        width={["100%"]}
        shadow="1"
        borderRadius="md"
        padding="3"
      >
        <Flex justify="center" align="center">
          <Avatar
            src={imgUri}
            size="xl"
          />
        </Flex>
        <Stack
          flex="1"
          padding="1"
          marginLeft="2"
          justifyContent="space-around"
          marginTop={{ base: "1", xs: "0" }}
        >
          <Heading
            size="sm"
            textAlign={{ base: "center", xs: "start" }}
            marginTop={{ base: "1", xs: "0" }}
          >
            {name}
          </Heading>
          <Text fontWeight="400" textAlign={{ base: "center", xs: "start" }}>
            {description}
          </Text>
          <Text
            fontWeight="400"
            fontSize="lg"
            textAlign={{ base: "center", xs: "right" }}
            paddingRight="2"
          >
            ${price}
          </Text>
        </Stack>
      </Stack>
    </Button>
  );
};

export { ScreenItem };
