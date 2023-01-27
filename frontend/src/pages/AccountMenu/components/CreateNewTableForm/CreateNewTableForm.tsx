import React from "react";
import {
  Button,
  Collapse,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  PinInput,
  PinInputField,
  useDisclosure,
} from "@chakra-ui/react";
import { HelperInfo } from "../../../../components/HelperInfo/HelperInfo";

const CreateNewTableForm: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button
        onClick={onToggle}
        width="100%"
        size="lg"
        fontSize="md"
        variant="outline"
        colorScheme="darkText"
        marginBottom="3"
      >
        Create a table
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <FormControl isRequired paddingX="5" paddingBottom="5" width="100%">
          <Flex justify="space-between" alignItems="center">
            <FormLabel fontSize="sm">Table No.</FormLabel>
            <HelperInfo
              size="xs"
              title="Table No."
              content="Table No serves as a unique reference to indentify each table."
              boxSize="5"
            />
          </Flex>
          <HStack>
            <PinInput>
              <PinInputField
                borderColor="gray.700"
                onChange={(e) => console.log(e.target.value)}
              />
              <PinInputField
                borderColor="gray.700"
                onChange={(e) => console.log(e.target.value)}
              />
              <PinInputField
                borderColor="gray.700"
                onChange={(e) => console.log(e.target.value)}
              />
            </PinInput>
          </HStack>
          <Button
            onClick={onToggle}
            width="100%"
            fontSize="md"
            variant="outline"
            colorScheme="darkText"
            marginY="3"
          >
            Save
          </Button>
        </FormControl>
      </Collapse>
    </>
  );
};

export { CreateNewTableForm };
