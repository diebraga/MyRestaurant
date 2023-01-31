import React from "react";
import {
  Button,
  Collapse,
  FormControl,
  FormLabel,
  Input,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MENU_SECTION } from "../../../../constants/apiEndpoints";
import {
  CREATED_SUCCESSFULLY,
  ERROR_TITLE,
  SUCCESS_TITLE,
  UNAUTHORIZED_ERROR,
  UNKWON_ERROR,
} from "../../../../constants/errorMessages";
import { AUTHENTICATION_TOKEN } from "../../../../constants/localStorageKeys";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { KeyedMutator } from "swr";
import { MenuSection } from "../../AccountMenu";

type Inputs = {
  name: string;
};

type CreateNewSectionFormProps = {
  mutateMenuSection: KeyedMutator<MenuSection[]>;
};

const CreateNewSectionForm: React.FC<CreateNewSectionFormProps> = ({
  mutateMenuSection,
}) => {
  const [authToken] = useLocalStorage(AUTHENTICATION_TOKEN, "");

  const { isOpen, onToggle } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>();

  const toast = useToast();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const formattedData: Inputs = {
      name: data.name.trim(),
    };
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_URL}/${MENU_SECTION}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(formattedData),
      }
    );
    const resJson = await response.json();
    if (resJson.errorCode === "invalid token") {
      toast({
        title: ERROR_TITLE,
        description: UNAUTHORIZED_ERROR,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } else if (resJson.id) {
      toast({
        title: SUCCESS_TITLE,
        description: CREATED_SUCCESSFULLY,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      mutateMenuSection(
        (prev) => [
          ...(prev as any[]),
          {
            ...formattedData,
            id: Math.floor(Math.random() * 1000000000),
            menuItems: [],
          },
        ],
        {
          revalidate: false,
        }
      );
      reset();
      onToggle();
    } else {
      toast({
        title: ERROR_TITLE,
        description: UNKWON_ERROR,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Button
        onClick={onToggle}
        width="100%"
        size="lg"
        fontSize="md"
        variant="outline"
        colorScheme="darkText"
        marginY="3"
      >
        Create menu section
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <FormControl
          isRequired
          paddingX="5"
          paddingBottom="5"
          width="100%"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormLabel fontSize="sm">Section title</FormLabel>
          <Input
            type="text"
            borderColor="gray.700"
            _focus={{ backgroundColor: "white" }}
            {...register("name", {
              required: "Name is required",
              maxLength: 15,
            })}
            isInvalid={!!errors.name}
          />
          <Text fontSize={["xs"]} color="red.500" marginTop="0.5">
            {errors && errors.name?.message}
          </Text>

          <Button
            width="100%"
            fontSize="md"
            variant="outline"
            colorScheme="darkText"
            isLoading={isSubmitting}
            marginY="3"
            type="submit"
          >
            Save
          </Button>
        </FormControl>
      </Collapse>
    </>
  );
};

export { CreateNewSectionForm };
