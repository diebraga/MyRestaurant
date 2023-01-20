import React from "react";
import { Button, Column, Heading } from "native-base";
import { Screen } from "./components/Screen/Screen";
import { safeMap } from "../../utils/safeMap/safeMap";
import { American, Arabic, Cuban, Hawaian } from "../../assets/index";

const homeTitle = "MENU";

export type Product = {
  id: string;
  name: string;
  description: string;
  imgUri: string;
  price: number
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
        price: 10
      },
      {
        id: "2",
        name: "Fish and Chips",
        description:
          "Bengaluru (also called Bangalore) is the center of India's high-tech",
        imgUri: Hawaian,
        price: 13
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
        price: 16
      },
      {
        id: "2",
        name: "Heineken",
        description:
          "Bengaluru (also called Bangalore) is the center of India's high-tech",
        imgUri: Arabic,
        price: 9
      },
    ],
  },
] as Section[];

const Home: React.FC = () => {
  return (
    <>
      <Column
        width="100%"
        alignItems="center"
        space={4}
        bg="amber.100"
        minHeight="100vh"
        paddingX={["3", "8"]}
        justifyContent="center"
      >
        <Heading fontWeight="medium" fontSize={["4xl"]} color="primary.500">
          {homeTitle}
        </Heading>
        {homeSections.map((option) => {
          return (
            <Button
              key={option.id}
              variant="outline"
              borderRadius="full"
              width="100%"
            >
              {option.title}
            </Button>
          );
        })}
      </Column>
      {safeMap(homeSections)?.map((option) => (
        <Screen key={option.id} {...option} />
      ))}
    </>
  );
};

export { Home };
