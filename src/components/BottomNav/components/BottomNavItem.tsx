import { Pressable, Icon, Text, Center } from "native-base";
import React, { ForwardRefExoticComponent } from "react";
import { navItemIsSelected } from "./utils/navItemIsSelected/navItemIsSelected";
import { IconProps } from "phosphor-react";

export type BottomNavItemProps = {
  isSelected: boolean;
  onPress: () => void;
  label: string;
  ItemIcon: ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
};

const BottomNavItem: React.FC<BottomNavItemProps> = ({
  isSelected,
  onPress,
  label,
  ItemIcon,
}) => {
  return (
    <Pressable
      opacity={navItemIsSelected(isSelected)}
      py="3"
      flex={1}
      onPress={onPress}
      accessibilityRole="button"
    >
      <Center>
        <ItemIcon size={24} />
        <Text fontSize="12">{label}</Text>
      </Center>
    </Pressable>
  );
};

export { BottomNavItem };
