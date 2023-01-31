import React from "react";
import { Button, Heading, Input, Text, Flex } from "@chakra-ui/react";
import { ReactComponent as GoogleIcon } from "../../assets/svgs/google-color.svg";
import { Key } from "phosphor-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { SIGN_IN } from "../../constants/apiEndpoints";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AUTHENTICATION_TOKEN } from "../../constants/localStorageKeys";
import { ACCOUNT_PAGE } from "../../constants/appEndpoints";

type Inputs = {
  email: string;
  password: string;
};

type RegisterResponse = {
  id: string;
  token: string;
  email: string;
};

const SignIn: React.FC = () => {
  const [, setToken] = useLocalStorage<string>(AUTHENTICATION_TOKEN, "");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const formattedData = {
        ...data,
        email: data.email.trim(),
        password: data.password,
      };
      const response = await fetch(
        `${process.env.REACT_APP_PUBLIC_URL}/${SIGN_IN}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formattedData),
        }
      );
      const resJson: RegisterResponse = await response.json();
      console.log(resJson);
      if (resJson.token) {
        setToken(resJson.token);
        navigate(`/${ACCOUNT_PAGE}`);
      }
    } catch (error) {
      console.log(error);
    }
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
          isRequired
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
          type="password"
          isRequired
          {...register("password", {
            required: "Password required",
          })}
        />
        <Text fontSize={["xs"]} color="red.500" marginTop="0.5">
          {errors && errors.password?.message}
        </Text>
        <Button
          display="inline-block"
          variant="link"
          size="lg"
          marginTop={3}
          fontSize="sm"
          colorScheme="blue"
          textAlign="right"
        >
          Recovery password
        </Button>

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
        <Text textAlign="center">-</Text>
        <Button
          width="100%"
          size="lg"
          fontSize="md"
          variant="outline"
          colorScheme="darkText"
          leftIcon={<GoogleIcon height={25} width={25} />}
          type="button"
        >
          Login with Google
        </Button>
        <Button
          display="inline-block"
          variant="link"
          size="lg"
          fontSize="sm"
          colorScheme="blue"
          textAlign="right"
          marginTop="3"
          as={Link}
          to="/signup"
        >
          Create new account
        </Button>
      </Flex>
    </Flex>
  );
};

export { SignIn };
