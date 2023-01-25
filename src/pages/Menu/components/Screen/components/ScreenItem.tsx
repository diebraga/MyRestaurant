import { Avatar, Flex, Heading, Pressable, Stack, Text } from "native-base";
import React from "react";
import { Product } from "../../../Menu";

export type ScreenItemProps = Product & {
  onPress?: () => void;
};

const ScreenItem: React.FC<ScreenItemProps> = ({
  name,
  description,
  imgUri,
  price,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress}>
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
            source={{
              uri: imgUri,
            }}
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
    </Pressable>
  );
};

export { ScreenItem };
