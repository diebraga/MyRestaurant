import React from "react";
import {
  Box,
  Button,
  Collapse,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

const CreateNewSectionForm: React.FC = () => {
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
        marginY="3"
      >
        Create menu section
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <FormControl isRequired paddingX="5" paddingBottom="5" width="100%">
          <FormLabel fontSize="sm">Section title</FormLabel>
          <Input
            type="text"
            borderColor="gray.700"
            _focus={{ backgroundColor: "white" }}
          />
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

export { CreateNewSectionForm };
