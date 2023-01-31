import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

export type MenuSectionDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
const MenuSectionDrawer: React.FC<MenuSectionDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu section items</DrawerHeader>

        <DrawerBody>

        </DrawerBody>

        <DrawerFooter>
        <DrawerFooter>
          <Button
            mr={3}
            onClick={onClose}
            variant="outline"
            colorScheme="darkText"
          >
            Disable
          </Button>
          <Button colorScheme="darkText" variant="outline">
            Delete
          </Button>
        </DrawerFooter>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { MenuSectionDrawer };
