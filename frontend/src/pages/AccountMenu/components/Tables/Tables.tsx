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
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HelperInfo } from "../../../../components/HelperInfo/HelperInfo";
import { Table } from "../../AccountMenu";
import { TableDrawer } from "./components/TableDrawer/TableDrawer";

type TablesProps = {
  tables?: Table[];
};

const Tables: React.FC<TablesProps> = ({ tables }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tableIndex, setTableIndex] = useState(0);

  const onClickTable = (index: number) => {
    setTableIndex(index);
    onOpen();
  };
  return (
    <Card width="100%" colorScheme="darkText">
      <CardHeader paddingY={0} paddingTop={2}>
        <Flex justify="space-between" alignItems="center">
          <Heading size="md">Tables</Heading>
          <HelperInfo title="Table" content="Create." size="md" />
        </Flex>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {tables && tables?.length > 0 ? (
            tables?.map((item, index) => {
              return (
                <Box
                  height="100%"
                  as={Link}
                  key={item.id}
                  onClick={() => onClickTable(index)}
                >
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
      <TableDrawer
        isOpen={isOpen}
        onClose={onClose}
        choosenItem={tables?.[tableIndex]}
      />
    </Card>
  );
};

export { Tables };
