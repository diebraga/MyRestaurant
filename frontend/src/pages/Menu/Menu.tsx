import { Flex } from "@chakra-ui/react";
import React from "react";
import { American, Arabic, Cuban, Hawaian } from "../../assets/index";
import { safeMap } from "../../utils/safeMap/safeMap";
import { Screen } from "./components/Screen/Screen";

export type Product = {
  id: string;
  name: string;
  description: string;
  imgUri: string;
  price: number;
};

export type Section = {
  title: string;
  id: string;
  products: Product[];
};

const homeSections = [
  {
    title: "Food",
    id: "1",
    products: [
      {
        id: "1",
        name: "Buffalo Chicken Wings",
        description:
          "Bengaluru (also called Bangalore) is the center of India's high-tech",
        imgUri: American,
        price: 10,
      },
      {
        id: "2",
        name: "Fish and Chips",
        description:
          "Bengaluru (also called Bangalore) is the center of India's high-tech",
        imgUri: Hawaian,
        price: 13,
      },
    ],
  },
  {
    title: "Drinks",
    id: "2",
    products: [
      {
        id: "1",
        name: "Guinness",
        description:
          "Bengaluru (also called Bangalore) is the center of India's high-tech",
        imgUri: Cuban,
        price: 16,
      },
      {
        id: "2",
        name: "Heineken",
        description:
          "Bengaluru (also called Bangalore) is the center of India's high-tech",
        imgUri: Arabic,
        price: 9,
      },
    ],
  },
] as Section[];

const Menu: React.FC = () => {
  return (
    <Flex flexDirection={["column"]}>
      {safeMap(homeSections)?.map((option) => (
        <Screen key={option.id} {...option} />
      ))}
    </Flex>
  );
};

export { Menu };
