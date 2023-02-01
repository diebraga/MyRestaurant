import React from "react";
import {
  Button,
  Collapse,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  PinInput,
  PinInputField,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { HelperInfo } from "../../../../components/HelperInfo/HelperInfo";
import { Table } from "../../AccountMenu";
import { KeyedMutator } from "swr";
import { SubmitHandler, useForm } from "react-hook-form";
import { TABLES } from "../../../../constants/apiEndpoints";
import { useLocalStorage } from "../../../../hooks/useLocalStorage";
import { AUTHENTICATION_TOKEN } from "../../../../constants/localStorageKeys";
import {
  CREATED_SUCCESSFULLY,
  ERROR_TITLE,
  SUCCESS_TITLE,
  UNAUTHORIZED_ERROR,
  UNKWON_ERROR,
} from "../../../../constants/toastMessages";

type CreateNewTableFormProps = {
  mutateTables: KeyedMutator<Table[]>;
};

type Inputs = {
  input1: number;
  input2: number;
  input3: number;
};
const CreateNewTableForm: React.FC<CreateNewTableFormProps> = ({
  mutateTables,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<Inputs>();

  const toast = useToast();

  const [authToken] = useLocalStorage(AUTHENTICATION_TOKEN, "");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await fetch(
      `${process.env.REACT_APP_PUBLIC_URL}/${TABLES}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          nO: (data.input1 || 0) + (data.input2 || 0) + (data.input3 || 0),
        }),
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
      mutateTables(
        (prev) => [
          ...(prev as any[]),
          {
            id: Math.floor(Math.random() * 1000000000),
            nO: data.input1 + data.input2 + data.input3,
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
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button
        onClick={onToggle}
        width="100%"
        size="lg"
        fontSize="md"
        variant="outline"
        colorScheme="darkText"
        marginBottom="3"
      >
        Create a table
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
          <Flex justify="space-between" alignItems="center">
            <FormLabel fontSize="sm">Table No.</FormLabel>
            <HelperInfo
              size="xs"
              title="Table No."
              content="Table No serves as a unique reference to indentify each table."
              boxSize="5"
            />
          </Flex>
          <HStack>
            <PinInput>
              <PinInputField borderColor="gray.700" {...register("input1")} />
              <PinInputField borderColor="gray.700" {...register("input2")} />
              <PinInputField borderColor="gray.700" {...register("input3")} />
            </PinInput>
          </HStack>
          <Button
            width="100%"
            fontSize="md"
            variant="outline"
            colorScheme="darkText"
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

export { CreateNewTableForm };
