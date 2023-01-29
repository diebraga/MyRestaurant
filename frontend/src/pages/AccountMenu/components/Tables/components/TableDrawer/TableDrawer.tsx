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
import { TableItem } from "../../Tables";
import { QrCode } from "../../../QrCode/QrCode";

type TableDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  choosenItem?: TableItem;
};

const TableDrawer: React.FC<TableDrawerProps> = ({
  isOpen,
  onClose,
  choosenItem,
}) => {
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Table No. {choosenItem?.nO}</DrawerHeader>

        <DrawerBody>
          <QrCode
            buttonTitle="Show table's QrCode"
            value={`https://www.youtube.com?table=${choosenItem?.nO}/`}
            titleHelper="QrCode"
            contentHelper={`Table ${choosenItem?.nO} QrCode`}
          />
        </DrawerBody>

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
      </DrawerContent>
    </Drawer>
  );
};

export { TableDrawer };
