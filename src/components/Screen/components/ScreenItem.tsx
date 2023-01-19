import {
  Avatar,
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "native-base";
import React from "react";

const ScreenItem: React.FC = () => {
  return (
    <Stack
      direction={["row"]}
      rounded="lg"
      overflow="hidden"
      width={["100%"]}
      shadow="1"
    >
      <Flex justify="center" bg="blue.100">
        <Avatar
          source={{
            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
          }}
          size="xl"
        />
      </Flex>
      <Stack flex="1" p="1" space={[3, 3, 1.5]} justifyContent="space-around">
        <Stack space="2">
          <Heading size="sm" ml="-1">
            The Garden City
          </Heading>
        </Stack>
        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry.
        </Text>
        <Text
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="400"
          fontSize="sm"
        >
          6 mins ago
        </Text>
      </Stack>
    </Stack>
  );
};

export { ScreenItem };
