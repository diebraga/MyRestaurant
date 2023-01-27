import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  StackDivider,
  Stack,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";
import React from "react";

type MenuSectionsProps = {
  sections?: {
    id: string;
    title: string;
    quantity: number;
  }[];
};

const MenuSections: React.FC<MenuSectionsProps> = ({ sections }) => {
  return (
    <Card width="100%" colorScheme="darkText">
      <CardHeader>
        <Heading size="md">Menu Sections</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {sections && sections?.length > 0 ? (
            sections?.map((item) => {
              return (
                <Box height="100%" as={Link} key={item.id}>
                  <Heading size="xs" textTransform="uppercase">
                    {item.title}
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {item.quantity} Items
                  </Text>
                </Box>
              );
            })
          ) : (
            <Box height="100%" as={Link}>
              <Text fontSize="sm">Please create a new section</Text>
            </Box>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};

export { MenuSections };
