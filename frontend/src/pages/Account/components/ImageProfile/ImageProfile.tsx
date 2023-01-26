import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { Camera } from "phosphor-react";
import React from "react";

type ImageProfileProps = {
  name: string
  imageUri?: string
}

const ImageProfile: React.FC<ImageProfileProps> = ({name,imageUri}) => {
  return (
    <Avatar
      name={name}
      src={imageUri}
      boxSize="200px"
      border="1px"
      size="2xl"
      background="white"
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
