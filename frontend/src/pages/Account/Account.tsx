import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  VisuallyHiddenInput,
} from "@chakra-ui/react";
import { Check } from "phosphor-react";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { AceptImageAlert } from "./components/AceptImageAlert/AceptImageAlert";
import { ImageProfile } from "./components/ImageProfile/ImageProfile";
import useSWR from "swr";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AUTHENTICATION_TOKEN } from "../../constants/localStorageKeys";
import { USER } from "../../constants/apiEndpoints";
import { fetchConfig } from "../../utils/fetchConfig/fetchConfig";

type UserType = {
  id: number;
  name: string;
  email: string;
};

const Account: React.FC = () => {
  const [authToken] = useLocalStorage(AUTHENTICATION_TOKEN, "");

  const { data, error } = useSWR<UserType>([
    `${process.env.REACT_APP_PUBLIC_URL}/${USER}`,
    fetchConfig(authToken),
  ]);
  const [isEdittingName, setIsEdittingName] = useState(false);
  const inputFile = useRef<HTMLInputElement>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const acceptNameChanges = () => {
    setIsEdittingName(false);
  };

  const openFileInput = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  const [{ src }, setImg] = useState({
    src: "",
  });

  useEffect(() => {
    if (src.length > 0) {
      onOpen();
    }
  }, [src, onOpen]);

  const handleImgPreview = (e: ChangeEvent<any>) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const onCloseEditPicture = () => {
    onClose();
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      width="100%"
      paddingX="4"
      marginTop="90px"
    >
      <AceptImageAlert
        isOpen={isOpen}
        onClose={onCloseEditPicture}
        onAccept={onClose}
      />
      <VisuallyHiddenInput
        type="file"
        ref={inputFile}
        onChange={(e) => handleImgPreview(e)}
      />
      <ImageProfile name={data?.name} onClick={openFileInput} src={src} />
      <InputGroup>
        <Input
          defaultValue={data?.name}
          fontSize={["3xl"]}
          verticalAlign="middle"
          textAlign="center"
          borderColor="transparent"
          readOnly={false}
          resize="none"
          variant="flushed"
          marginTop="4"
          onClick={() => setIsEdittingName(true)}
        />
        {isEdittingName && (
          <InputRightElement paddingTop={8}>
            <Button
              h="1.75rem"
              size="sm"
              variant="unstyled"
              onClick={acceptNameChanges}
            >
              <Check size={32} />
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
    </Flex>
  );
};

export { Account };
