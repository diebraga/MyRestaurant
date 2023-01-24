import { Pressable, Icon, Text, Center } from "native-base";
import React from "react";
import { navItemIsSelected } from "./utils/navItemIsSelected/navItemIsSelected";

export type BottomNavItemProps = {
  isSelected: boolean;
  onPress: () => void;
  label: string;
};

const BottomNavItem: React.FC<BottomNavItemProps> = ({
  isSelected,
  onPress,
  label,
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
        <Icon
          mb="1"
          // as={
          //   <MaterialCommunityIcons
          //     name={selected === 0 ? "home" : "home-outline"}
          //   />
          // }
          size="sm"
        />
        <Text fontSize="12">{label}</Text>
      </Center>
    </Pressable>
  );
};

export { BottomNavItem };
