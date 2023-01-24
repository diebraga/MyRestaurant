import React from "react";
import { Center, Flex, Pressable, Icon, Text } from "native-base";
import { Outlet, useParams, useNavigate } from "react-router-dom";

const BottomNav: React.FC = () => {
  const [selected, setSelected] = React.useState(0);
  let { userId } = useParams();
  const navigate = useNavigate();

  const onPressNavigation = (selected: number, to: string) => {
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
        <Pressable
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => onPressNavigation(0, `/${userId}`)}
        >
          <Center>
            <Icon
              mb="1"
              // as={
              //   <MaterialCommunityIcons
              //     name={selected === 0 ? "home" : "home-outline"}
              //   />
              // }

              size="sm"
            />
            <Text fontSize="12">Home</Text>
          </Center>
        </Pressable>

        <Pressable
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => onPressNavigation(1, `/${userId}/menu`)}
          >
          <Center>
            <Icon
              mb="1"
              // as={<MaterialIcons name="search" />}
              size="sm"
            />
            <Text fontSize="12">Menu</Text>
          </Center>
        </Pressable>
        <Pressable
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}
        >
          <Center>
            <Icon
              mb="1"
              // as={
              //   <MaterialCommunityIcons
              //     name={selected === 2 ? "cart" : "cart-outline"}
              //   />
              // }

              size="sm"
            />
            <Text fontSize="12">Cart</Text>
          </Center>
        </Pressable>
      </Flex>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export { BottomNav };
