import React from "react";
import { Flex } from "@chakra-ui/react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { BottomNavItem } from "./components/BottomNavItem";
import { layoutMaxWidth } from "../../constants";
import { House, Notebook, BagSimple } from "phosphor-react";

const BottomNav: React.FC = () => {
  const [selected, setSelected] = React.useState(0);
  let { userId } = useParams();
  const navigate = useNavigate();

  const bottomNavItems = [
    {
      id: "1",
      label: "Home",
      path: "",
      ItemIcon: House,
    },
    {
      id: "2",
      label: "Menu",
      path: "/menu",
      ItemIcon: Notebook,
    },
    {
      id: "3",
      label: "Cart",
      path: "/cart",
      ItemIcon: BagSimple,
    },
  ];
  
  const onClickNavigation = (selected: number, to: string) => {
    setSelected(selected);
    navigate(to);
  };

  return (
    <>
      <Flex
        flexDirection="row"
        position="fixed"
        bottom="0"
        zIndex={999}
        width="100%"
        maxWidth={layoutMaxWidth}
        background="white"
        boxShadow="0px 0px 5px 0px rgba(0, 0, 0, 0.3)"
      >
        {bottomNavItems.map((item, index) => {
          return (
            <BottomNavItem
              label={item.label}
              isSelected={index === selected}
              onClick={() => onClickNavigation(index, `/${userId}` + item.path)}
              ItemIcon={item.ItemIcon}
              key={item.id}
            />
          );
        })}
      </Flex>
      <Flex>
        <Outlet />
      </Flex>
    </>
  );
};

export { BottomNav };
