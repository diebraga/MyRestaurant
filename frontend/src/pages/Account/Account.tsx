import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Check } from "phosphor-react";
import React, { useState } from "react";
import { ImageProfile } from "./components/ImageProfile/ImageProfile";
import { QrCode } from "./components/QrCode/QrCode";

const Account: React.FC = () => {
  const [isEdittingName, setIsEdittingName] = useState(false);

  const acceptNameChanges = () => {
    setIsEdittingName(false);
  };

  return (
    <Flex flexDirection="column" alignItems="center" width="100%" paddingX="4">
      <ImageProfile name="Tel Aviv" />
      <InputGroup>
        <Input
          defaultValue="Tel Aviv"
          fontSize={["3xl"]}
          verticalAlign="middle"
          textAlign="center"
          borderColor="transparent"
          readOnly={false}
          resize="none"
          variant="flushed"
          marginTop="4"
          onClick={() => setIsEdittingName(true)}
        />
        {isEdittingName && (
          <InputRightElement paddingTop={8}>
            <Button
              h="1.75rem"
              size="sm"
              variant="unstyled"
              onClick={acceptNameChanges}
            >
              <Check size={32} />
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      <Accordion allowToggle width="100%">
        <AccordionItem>
          <AccordionButton >
            <Box as="span" flex="1" textAlign="left">
              Show menu QrCode
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <QrCode value={"https://discord.com/"} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export { Account };
