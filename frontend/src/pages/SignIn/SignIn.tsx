import React from "react";
import { Button, Heading, Input, Text, Flex } from "@chakra-ui/react";
import { ReactComponent as GoogleIcon } from "../../assets/svgs/google-color.svg";
import { Key } from "phosphor-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    navigate("/account");
    console.log(data);
  };

  return (
    <Flex
      flex={1}
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      padding={6}
    >
      <Flex
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        maxW="400px"
        width="100%"
        flexDirection="column"
      >
        <Heading>Login</Heading>
        <Text marginTop="4">Email</Text>
        <Input
          size="lg"
          borderColor="gray.700"
          _focus={{ backgroundColor: "white" }}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
        />
        <Text fontSize={["xs"]} color="red.500" marginTop="0.5">
          {errors && errors.email?.message}
        </Text>

        <Text marginTop="2">Password</Text>
        <Input
          borderColor="gray.700"
          size="lg"
          _focus={{ backgroundColor: "white" }}
          {...register("password", {
            minLength: 4,
            maxLength: 30,
          })}
          type="password"
        />
        <Text fontSize={["xs"]} color="red.500" marginTop="0.5">
          {errors && errors.password?.message}
        </Text>
        <Button
          width="100%"
          marginTop="4"
          variant="outline"
          colorScheme="darkText"
          leftIcon={<Key size={25} />}
          textAlign="left"
          size="lg"
          type="submit"
          fontSize="md"
        >
          SignIn
        </Button>

        <Button
          display="inline-block"
          variant="link"
          size="lg"
          marginTop={3}
          fontSize="md"
          colorScheme="blue"
        >
          Did you forget your password?
        </Button>

        <Text textAlign="center">-</Text>
        <Button
          width="100%"
          size="lg"
          fontSize="md"
          variant="outline"
          colorScheme="darkText"
          marginTop="2"
          leftIcon={<GoogleIcon height={25} width={25} />}
          type="button"
        >
          Login with Google
        </Button>
      </Flex>
    </Flex>
  );
};

export { SignIn };
