import React from "react";
import {
  Button,
  Heading,
  Input,
  Text,
  Flex,
  FormControl,
} from "@chakra-ui/react";
import { User } from "phosphor-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

type Inputs = {
  email_register: string;
  password_register: string;
  name_register: string;
};

const SignUp: React.FC = () => {
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
        <Heading>Register</Heading>
        <Text marginTop="4">Name</Text>
        <Input
          size="lg"
          borderColor="gray.700"
          _focus={{ backgroundColor: "white" }}
          {...register("name_register", {
            required: "Name is required",
          })}
        />
        <Text fontSize={["xs"]} color="red.500" marginTop="0.5">
          {errors && errors.name_register?.message}
        </Text>

        <Text marginTop={2}>Email</Text>
        <Input
          size="lg"
          borderColor="gray.700"
          _focus={{ backgroundColor: "white" }}
          {...register("email_register", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
        />
        <Text fontSize={["xs"]} color="red.500" marginTop="0.5">
          {errors && errors.email_register?.message}
        </Text>

        <Text marginTop="2">Password</Text>
        <Input
          borderColor="gray.700"
          size="lg"
          _focus={{ backgroundColor: "white" }}
          {...register("password_register", {
            minLength: 4,
            maxLength: 30,
          })}
          type="password"
        />
        <Text fontSize={["xs"]} color="red.500" marginTop="0.5">
          {errors && errors.password_register?.message}
        </Text>
        <Button
          width="100%"
          marginTop="4"
          variant="outline"
          colorScheme="darkText"
          leftIcon={<User size={25} />}
          textAlign="left"
          size="lg"
          type="submit"
          fontSize="md"
        >
          SignUp
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
          to="/signin"
        >
          I already have an account
        </Button>
      </Flex>
    </Flex>
  );
};

export { SignUp };
