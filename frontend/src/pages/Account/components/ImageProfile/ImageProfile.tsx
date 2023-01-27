import {
  Avatar,
  AvatarBadge,
  Button,
} from "@chakra-ui/react";
import { Camera } from "phosphor-react";
import React, {  } from "react";

type ImageProfileProps = {
  name: string;
  onClick?: () => void;
  src?: string;
};

const ImageProfile: React.FC<ImageProfileProps> = ({ name, onClick, src }) => {
  return (
    <Avatar
      name={name}
      src={src}
      boxSize="180px"
      border="1px"
      size="2xl"
      background="white"
      zIndex={2}
      as={Button}
      onClick={onClick}
      objectFit="cover"
    >
      <AvatarBadge
        boxSize="50px"
        borderColor="black"
        border="1px"
        right="3"
        bottom="3"
        background="white"
      >
        <Camera size={32} />
      </AvatarBadge>
    </Avatar>
  );
};

export { ImageProfile };
