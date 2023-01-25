import React, { ForwardRefExoticComponent } from "react";
import { Flex } from "@chakra-ui/react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { BottomNavItem } from "./components/BottomNavItem";
import { IconProps } from "phosphor-react";

type BottomNavProps = {
  items: {
    id: string;
    label: string;
    path: string;
    ItemIcon: ForwardRefExoticComponent<
      IconProps & React.RefAttributes<SVGSVGElement>
    >;
  }[];
};

const BottomNav: React.FC<BottomNavProps> = ({ items }) => {
  const [selected, setSelected] = React.useState(0);
  let { userId } = useParams();
  const navigate = useNavigate();

  const onClickNavigation = (selected: number, to: string) => {
    setSelected(selected);
    navigate(to);
  };

  return (
    <>
      <Flex
        background="white"
        justify="space-around"
        flexDirection="row"
        position="fixed"
        bottom="0"
        zIndex={999}
        flex={1}
        width="100%"
        maxWidth="650px"
      >
        {items.map((item, index) => {
          return (
            <BottomNavItem
              label={item.label}
              isSelected={index === selected}
              onClick={() => onClickNavigation(index, `/${userId}` + item.path)}
              ItemIcon={item.ItemIcon}
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
