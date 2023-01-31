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
  useDisclosure,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { AUTHENTICATION_TOKEN } from "../../../../../../constants/localStorageKeys";
import { useLocalStorage } from "../../../../../../hooks/useLocalStorage";
import useSWR from "swr";
import { MenuSection } from "../../../../AccountMenu";
import { MENU_SECTION } from "../../../../../../constants/apiEndpoints";
import { fetchConfig } from "../../../../../../utils/fetchConfig/fetchConfig";
import { Alert } from "../../../../../../components/Alert/Alert";
import { useToast } from "@chakra-ui/react";
import { DELETED_SUCCESSFULLY, SUCCESS_TITLE } from "../../../../../../constants/toastMessages";

export type MenuSectionDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};
const MenuSectionDrawer: React.FC<MenuSectionDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [authToken] = useLocalStorage(AUTHENTICATION_TOKEN, "");

  const { mutate } = useSWR<MenuSection[]>([
    `${process.env.REACT_APP_PUBLIC_URL}/${MENU_SECTION}`,
    fetchConfig(authToken),
  ]);

  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure();

  const [searchParams] = useSearchParams();

  const sectionId = searchParams.get("sectionId");

  const toast = useToast()

  const onDeleteMenuSection = async () => {
    mutate(
      (prev) => {
        return prev?.filter((section) => section.id !== Number(sectionId));
      },
      {
        revalidate: false,
      }
    );
    try {
      const response = await fetch(
        `${process.env.REACT_APP_PUBLIC_URL}/${MENU_SECTION}/${Number(
          sectionId
        )}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const resJson = await response.json();
      if (resJson.id) {
        toast({
          title: SUCCESS_TITLE,
          description: DELETED_SUCCESSFULLY,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
    onClose();
    onCloseAlert();
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <Alert
        isOpen={isOpenAlert}
        headerText="Alert"
        bodyText="Deleting this section all items in it will be removed"
        textLeftButton="No"
        textRightButton="Yes"
        onLeftClick={onCloseAlert}
        onRightClick={onDeleteMenuSection}
      />
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu section items</DrawerHeader>

        <DrawerBody></DrawerBody>

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
            <Button
              colorScheme="darkText"
              variant="outline"
              onClick={onOpenAlert}
            >
              Delete
            </Button>
          </DrawerFooter>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { MenuSectionDrawer };
