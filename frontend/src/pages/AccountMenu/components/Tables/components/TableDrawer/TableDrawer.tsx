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
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { QrCode } from "../../../QrCode/QrCode";
import { Table } from "../../../../AccountMenu";
import { useLocalStorage } from "../../../../../../hooks/useLocalStorage";
import { AUTHENTICATION_TOKEN } from "../../../../../../constants/localStorageKeys";
import useSWR from "swr";
import { TABLES } from "../../../../../../constants/apiEndpoints";
import { fetchConfig } from "../../../../../../utils/fetchConfig/fetchConfig";
import {
  DELETED_SUCCESSFULLY,
  ERROR_TITLE,
  SUCCESS_TITLE,
  UNAUTHORIZED_ERROR,
} from "../../../../../../constants/toastMessages";
import { Alert } from "../../../../../../components/Alert/Alert";

type TableDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  choosenItem?: Table;
  tableId: number;
};

const TableDrawer: React.FC<TableDrawerProps> = ({
  isOpen,
  onClose,
  choosenItem,
  tableId,
}) => {
  const {
    isOpen: isOpenAlert,
    onOpen: onOpenAlert,
    onClose: onCloseAlert,
  } = useDisclosure();

  const [authToken] = useLocalStorage(AUTHENTICATION_TOKEN, "");

  const { data: tableData, mutate: mutateTables } = useSWR<Table[]>([
    `${process.env.REACT_APP_PUBLIC_URL}/${TABLES}`,
    fetchConfig(authToken),
  ]);

  const toast = useToast();

  const onDelete = async () => {
    mutateTables(
      (prev) => {
        return prev?.filter((table) => table.id !== Number(tableId));
      },
      {
        revalidate: false,
      }
    );
    try {
      const response = await fetch(
        `${process.env.REACT_APP_PUBLIC_URL}/${TABLES}/${Number(tableId)}`,
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
      toast({
        title: ERROR_TITLE,
        description: UNAUTHORIZED_ERROR,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }
    onClose();
    onCloseAlert();
  };
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <Alert
        isOpen={isOpenAlert}
        headerText="Alert"
        bodyText="Are you sure you wa"
        textLeftButton="No"
        textRightButton="Yes"
        onLeftClick={onCloseAlert}
        onRightClick={onDelete}
      />

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
          <Button colorScheme="darkText" variant="outline" onClick={onOpenAlert}>
            Delete
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export { TableDrawer };
