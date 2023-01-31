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
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { HelperInfo } from "../../../../components/HelperInfo/HelperInfo";
import { MenuSection } from "../../AccountMenu";

type MenuSectionsProps = {
  sections?: MenuSection[];
};

const MenuSections: React.FC<MenuSectionsProps> = ({ sections }) => {
  return (
    <Card width="100%" colorScheme="darkText">
      <CardHeader paddingY={0} paddingTop={2}>
        <Flex justify="space-between" alignItems="center">
          <Heading size="md">Menu Sections</Heading>
          <HelperInfo
            title="Menu section"
            content="Every sections with the items are going to be displayed in the Menu."
            size="md"
          />
        </Flex>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {sections && sections?.length > 0 ? (
            sections?.map((item) => {
              return (
                <Box height="100%" as={Link} key={item.id}>
                  <Heading size="xs" textTransform="uppercase">
                    {item.name}
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {item.menuItems.length} Items
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
