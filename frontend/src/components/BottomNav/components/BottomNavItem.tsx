import { Button, Icon, Text, Center } from "@chakra-ui/react";
import React, { ForwardRefExoticComponent } from "react";
import { navItemIsSelected } from "./utils/navItemIsSelected/navItemIsSelected";
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
    <Button
      opacity={navItemIsSelected(isSelected)}
      py="3"
      flex={1}
      onClick={onClick}
      type="button"
    >
      <Center>
        <ItemIcon size={24} />
        <Text fontSize="12">{label}</Text>
      </Center>
    </Button>
  );
};

export { BottomNavItem };
