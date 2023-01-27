import React from "react";
import { Flex } from "@chakra-ui/react";
import { QrCode } from "./components/QrCode/QrCode";
import { CreateNewSectionForm } from "./components/CreateNewSectionForm/CreateNewSectionForm";
import { MenuSections } from "./components/MenuSections/MenuSections";

const mockMenuSections = [
  { id: "1", title: "Foods", quantity: 2 },
  { id: "2", title: "Drinks", quantity: 2 },
  { id: "3", title: "Desserts", quantity: 2 },
];
const AccountMenu: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      paddingX="4"
      marginTop="90px"
    >
      <MenuSections />
      <CreateNewSectionForm />
      <QrCode value={"https://discord.com/"} buttonTitle="Show Menu's QrCode" />
    </Flex>
  );
};

export { AccountMenu };
