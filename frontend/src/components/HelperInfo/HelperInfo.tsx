import {
  Button,
  ButtonProps,
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

type IconSizeType = "sm" | "md" | "xs";

type HelperInfoProps = ButtonProps & {
  title?: string;
  content?: string;
  size: IconSizeType;
};

const HelperInfo: React.FC<HelperInfoProps> = ({
  title,
  content,
  size,
  ...props
}) => {
  const defineIconSize = (size: IconSizeType): number => {
    if (size === "sm") {
      return 24;
    } else if (size === "md") {
      return 28;
    } else return 20;
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="unstyled" {...props}>
          <Question size={defineIconSize(size)} />
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
