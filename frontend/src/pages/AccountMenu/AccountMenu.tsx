import React from "react";
import { Flex } from "@chakra-ui/react";
import { QrCode } from "./components/QrCode/QrCode";
import { CreateNewSectionForm } from "./components/CreateNewSectionForm/CreateNewSectionForm";
import { MenuSections } from "./components/MenuSections/MenuSections";
import { CreateNewTableForm } from "./components/CreateNewTableForm/CreateNewTableForm";
import { Tables } from "./components/Tables/Tables";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AUTHENTICATION_TOKEN } from "../../constants/localStorageKeys";
import useSWR from "swr";
import { fetchConfig } from "../../utils/fetchConfig/fetchConfig";
import { MENU_SECTION, TABLES } from "../../constants/apiEndpoints";

export type MenuSection = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  menuItems: any[];
};

export type Table = {
  id: number;
  nO: number;
  createdAt: Date;
  updatedAt: Date;
};

const AccountMenu: React.FC = () => {
  const [authToken] = useLocalStorage(AUTHENTICATION_TOKEN, "");

  const { data, error, mutate } = useSWR<MenuSection[]>([
    `${process.env.REACT_APP_PUBLIC_URL}/${MENU_SECTION}`,
    fetchConfig(authToken),
  ]);

  const { data: tableData, mutate: mutateTables } = useSWR<Table[]>([
    `${process.env.REACT_APP_PUBLIC_URL}/${TABLES}`,
    fetchConfig(authToken),
  ]);

  return (
    <Flex
      flexDirection="column"
      width="100%"
      paddingX="4"
      marginTop="90px"
      overflow="scroll"
      marginBottom="10"
    >
      <MenuSections sections={data} />
      <CreateNewSectionForm mutateMenuSection={mutate} />
      <QrCode
        value={"https://discord.com/"}
        buttonTitle="Show Menu's QrCode"
        contentHelper="This QrCode redirects to your menu products Download and make it visible for your clients."
        titleHelper="QrCode"
      />
      <Tables tables={tableData} />
      <CreateNewTableForm mutateTables={mutateTables}/>
    </Flex>
  );
};

export { AccountMenu };
