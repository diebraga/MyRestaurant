import { Avatar, Flex, Heading, Stack, Text } from "native-base";
import React from "react";
import { Product } from "../../../Home";

export type ScreenItemProps = Product;

const ScreenItem: React.FC<ScreenItemProps> = ({
  name,
  description,
  imgUri,
  price,
}) => {
  return (
    <Stack direction={["row"]} rounded="lg" overflow="hidden" width={["100%"]}>
      <Flex justify="center">
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
        marginLeft="1"
        space={[3, 3, 1.5]}
        justifyContent="space-around"
      >
        <Stack>
          <Heading size="sm" ml="-1">
            {name}
          </Heading>
          <Text fontWeight="400">{description}</Text>
        </Stack>
        <Flex marginLeft="0">
          <Text color="coolGray.600" fontWeight="400" fontSize="sm">
            ${price}
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
};

export { ScreenItem };
