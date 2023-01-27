import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";
import { List } from "phosphor-react";
import { layoutMaxWidth } from "../../constants";

const AdminHeader: React.FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const drawerLinks = [
    { id: 1, name: "Profile", path: "/account" },
    { id: 2, name: "Menu", path: "/account/menu" },
  ];

  return (
    <>
      <Flex
        flexDirection="row"
        position="fixed"
        top="0"
        zIndex={999}
        width="100%"
        maxWidth={layoutMaxWidth}
        background="white"
        boxShadow="0px 0px 5px 0px rgba(0, 0, 0, 0.3)"
        padding="2.5"
      >
        <List size={40} onClick={onOpen} />
      </Flex>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" />

          <DrawerBody marginTop="3.125rem">
            <VStack spacing="3">
              {drawerLinks.map((item) => {
                return (
                  <Button
                    width="100%"
                    size="lg"
                    fontSize="md"
                    variant="outline"
                    colorScheme="darkText"
                    key={item.id}
                    as={Link}
                    to={item.path}
                    onClick={onClose}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Flex>
        <Outlet />
      </Flex>
    </>
  );
};

export { AdminHeader };
