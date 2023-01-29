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

type TablesProps = {
  tables?: {
    id: string;
    nO: number;
  }[];
};

const Tables: React.FC<TablesProps> = ({ tables }) => {
  return (
    <Card width="100%" colorScheme="darkText">
      <CardHeader paddingY={0} paddingTop={2}>
        <Flex justify="space-between" alignItems="center">
          <Heading size="md">Tables</Heading>
          <HelperInfo
            title="Table"
            content="Create."
            size="md"
          />
        </Flex>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {tables && tables?.length > 0 ? (
            tables?.map((item) => {
              return (
                <Box height="100%" as={Link} key={item.id}>
                  <Heading size="xs" textTransform="uppercase">
                    Table
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    No: {item.nO} 
                  </Text>
                </Box>
              );
            })
          ) : (
            <Box height="100%" as={Link}>
              <Text fontSize="sm">Please create a new table</Text>
            </Box>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};

export { Tables };
