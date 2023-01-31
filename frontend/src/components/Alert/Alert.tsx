import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogCloseButton,
  Button,
} from "@chakra-ui/react";

type AlertProps = {
  onLeftClick: () => void;
  isOpen: boolean;
  onRightClick: () => void;
  headerText?: string;
  bodyText: string
  textLeftButton: string
  textRightButton: string
};
const Alert: React.FC<AlertProps> = ({
  onLeftClick,
  isOpen,
  onRightClick,
  headerText,
  bodyText,
  textLeftButton,
  textRightButton
}) => {
  const cancelRef = React.useRef<any>();

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onRightClick}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogContent>
        <AlertDialogHeader>{headerText}</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          {bodyText}
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button
            onClick={onLeftClick}
            variant="outline"
            colorScheme="darkText"
            marginRight="3"
          >
            {textLeftButton}
          </Button>
          <Button variant="outline" colorScheme="darkText" onClick={onRightClick}>
            {textRightButton}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { Alert };
