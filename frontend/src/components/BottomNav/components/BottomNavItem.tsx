import { Button, Text, Center, Flex } from "@chakra-ui/react";
import React, { ForwardRefExoticComponent } from "react";
import { IconProps } from "phosphor-react";

export type BottomNavItemProps = {
  isSelected: boolean;
  onClick: () => void;
  label: string;
  ItemIcon: ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
};

const BottomNavItem: React.FC<BottomNavItemProps> = ({
  isSelected,
  onClick,
  label,
  ItemIcon,
}) => {
  return (
    <Flex
      as={Button}
      flex={1}
      width="100%"
      justify="center"
      onClick={onClick}
      background="transparent"
      height={50}
      borderRadius="none"
    >
      <Center flexDirection="column">
        <ItemIcon size={24} />
        <Text fontSize="12">{label}</Text>
      </Center>
    </Flex>
  );
};

export { BottomNavItem };
