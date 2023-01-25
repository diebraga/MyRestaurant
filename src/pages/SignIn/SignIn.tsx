import React from "react";
import { Button, Heading, Input, Text, View } from "native-base";
import { ReactComponent as GoogleIcon } from "../../assets/svgs/google-color.svg";
import { Key } from "phosphor-react";

const SignIn: React.FC = () => {
  return (
    <View
      flex={1}
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      padding={6}
    >
      <View maxW="400px" width="100%">
        <Heading>Login</Heading>
        <Text marginTop="4">Email</Text>
        <Input
          size="xl"
          focusOutlineColor="dark"
          _focus={{ backgroundColor: "white" }}
        />

        <Text marginTop="2">Password</Text>
        <Input
          size="xl"
          focusOutlineColor="dark"
          _focus={{ backgroundColor: "white" }}
        />

        <Button
          width="100%"
          marginTop="4"
          variant="outline"
          colorScheme="darkText"
          display="inline-block"
          _icon={{ color: "black" }}
          leftIcon={<Key size={25} />}
        >
          SignIn
        </Button>
        <Button display="inline-block" variant="link">
          Did you forget your password?
        </Button>

        <Text textAlign="center">
          -
        </Text>
        <Button
          width="100%"
          variant="outline"
          colorScheme="darkText"
          display="inline-block"
          marginTop="2"
          leftIcon={<GoogleIcon height={25} width={25} />}
        >
          Login with Google
        </Button>
      </View>
    </View>
  );
};

export { SignIn };
