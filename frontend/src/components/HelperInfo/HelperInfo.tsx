import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { Question } from "phosphor-react";
import React from "react";

type HelperInfoProps = {
  title?: string;
  content?: string;
  size: "sm" | "md";
};

const HelperInfo: React.FC<HelperInfoProps> = ({ title, content, size }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="unstyled">
          <Question size={size === "md" ? 28 : 24} />
        </Button>
      </PopoverTrigger>
      <PopoverContent maxWidth="300px">
        <PopoverArrow />
        <PopoverBody>
          <Text fontSize="sm">{title}</Text>
          <Text fontSize="smaller" marginTop="0.5">
            {content}
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export { HelperInfo };
