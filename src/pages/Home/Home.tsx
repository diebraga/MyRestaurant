import React from "react";
import { Column, Heading } from "native-base";

const homeTitle = "LOGO";

const Home: React.FC = () => {
  return (
    <>
      <Column
        width="100%"
        alignItems="center"
        space={4}
        minHeight="100vh"
        paddingX={["3", "8"]}
        justifyContent="center"
      >
        <Heading fontWeight="medium" fontSize={["4xl"]}>
          {homeTitle}
        </Heading>
      </Column>
    </>
  );
};

export { Home };
