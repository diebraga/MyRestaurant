import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Check } from "phosphor-react";
import React, { useState } from "react";
import { ImageProfile } from "./components/ImageProfile/ImageProfile";

const Account: React.FC = () => {
  const [isEdittingName, setIsEdittingName] = useState(false);

  const acceptNameChanges = () => {
    setIsEdittingName(false);
  };

  return (
    <Flex flexDirection="column" alignItems="center" width="100%" paddingX="4" marginTop="90px">
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
    </Flex>
  );
};

export { Account };
