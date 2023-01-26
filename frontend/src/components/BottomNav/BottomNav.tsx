import React, { ForwardRefExoticComponent } from "react";
import { Flex } from "@chakra-ui/react";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { BottomNavItem } from "./components/BottomNavItem";
import { IconProps } from "phosphor-react";
import { navItemIsSelected } from "./components/utils/navItemIsSelected/navItemIsSelected";

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
        flexDirection="row"
        position="fixed"
        bottom="0"
        zIndex={999}
        width="100%"
        maxWidth="650px"
        background="white"
        boxShadow="0px 0px 5px 0px rgba(0, 0, 0, 0.3)"
      >
        {items.map((item, index) => {
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
