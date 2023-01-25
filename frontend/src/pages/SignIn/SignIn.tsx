import React from "react";
import { Button, Heading, Input, Text, View } from "native-base";
import { ReactComponent as GoogleIcon } from "../../assets/svgs/google-color.svg";
import { Key } from "phosphor-react";
import { useForm, SubmitHandler } from "react-hook-form";

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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <View
      flex={1}
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      padding={6}
    >
      <View maxW="400px" width="100%">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ flexDirection: "column", display: "flex" }}
        >
          <Heading>Login</Heading>
          <Text marginTop="4">Email</Text>
          <Input
            size="xl"
            focusOutlineColor="dark"
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

          <Text marginTop="2">Password</Text>
          <Input
            size="xl"
            focusOutlineColor="dark"
            _focus={{ backgroundColor: "white" }}
            {...register("password", {
              minLength: 4,
              maxLength: 30,
            })}
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
        </form>
        <Text textAlign="center">-</Text>
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
