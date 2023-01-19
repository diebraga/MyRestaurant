import { Avatar, Column, Flex, HStack, Heading, Stack, Text } from "native-base";
import React from "react";

const ScreenItem: React.FC = ({}) => {
  return (
    <Stack direction={["row"]} rounded="lg" overflow="hidden" width={["100%"]}>
      <Flex justify="center" bg="blue.100">
        <Avatar
          source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
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
            The Garden City
          </Heading>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's
            high-tech.
          </Text>
        </Stack>
        <Flex marginLeft="0" bg="red.100">
          <Text color="coolGray.600" fontWeight="400" fontSize="sm">
            $40
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
};

export { ScreenItem };
