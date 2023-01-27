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

type AceptImageAlertProps = {
  onClose: () => void;
  isOpen: boolean;
  onAccept: () => void;
};
const AceptImageAlert: React.FC<AceptImageAlertProps> = ({
  onClose,
  isOpen,
  onAccept
}) => {
  const cancelRef = React.useRef<any>();

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogContent>
        <AlertDialogHeader>Save changes</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          Would you like to change you profile image?.
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button
            ref={cancelRef}
            onClick={onClose}
            variant="outline"
            colorScheme="darkText"
            marginRight="3"
          >
            No
          </Button>
          <Button variant="outline" colorScheme="darkText" onClick={onAccept}>
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export { AceptImageAlert };
