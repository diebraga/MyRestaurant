import { Button, Flex } from "@chakra-ui/react";
import React, { createRef } from "react";
import QRCode from "react-qr-code";
import * as htmlToImage from "html-to-image";

export type QrCodeProps = {
  value: string;
};

const createFileName = (extension = "", ...names: string[]) => {
  if (!extension) {
    return "";
  }

  return `${names.join("")}.${extension}`;
};

const QrCode: React.FC<QrCodeProps> = ({ value }) => {
  const ref = createRef();

  const takeScreenShot = async (node: any) => {
    const dataURI = await htmlToImage.toJpeg(node);
    return dataURI;
  };

  const download = (image: any, { name = "img", extension = "jpg" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  return (
    <>
      <Flex
        padding="5"
        width="100%"
        justify="center"
        bg="white"
        ref={ref as any}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "250px", width: "100%" }}
          value={value}
          viewBox={`0 0 256 256`}
        />
      </Flex>
      <Button variant="link" onClick={downloadScreenshot} color="blue.500">
        Download QrCode
      </Button>
    </>
  );
};

export { QrCode };
