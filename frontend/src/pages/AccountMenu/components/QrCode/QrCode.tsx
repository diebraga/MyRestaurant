import React, { createRef } from "react";
import QRCode from "react-qr-code";
import * as htmlToImage from "html-to-image";
import { Flex, Button, Collapse, useDisclosure } from "@chakra-ui/react";
import { HelperInfo } from "../../../../components/HelperInfo/HelperInfo";

export type QrCodeProps = {
  value: string;
  buttonTitle: string;
  titleHelper?: string;
  contentHelper?: string;
};

const createFileName = (extension = "", ...names: string[]) => {
  if (!extension) {
    return "";
  }

  return `${names.join("")}.${extension}`;
};

const QrCode: React.FC<QrCodeProps> = ({
  value,
  buttonTitle,
  contentHelper,
  titleHelper,
}) => {
  const ref = createRef();
  const { isOpen, onToggle } = useDisclosure();

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
      <Button
        onClick={onToggle}
        width="100%"
        size="lg"
        fontSize="md"
        variant="outline"
        colorScheme="darkText"
        marginBottom="3"
      >
        {buttonTitle}
      </Button>
      <Collapse in={isOpen} animateOpacity>
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
        <Flex justify="space-between">
          <Button variant="link" onClick={downloadScreenshot} color="blue.500">
            Download QrCode
          </Button>
          {!titleHelper && !contentHelper ? null : (
            <HelperInfo title={titleHelper} content={contentHelper} size="sm" />
          )}
        </Flex>
      </Collapse>
    </>
  );
};

export { QrCode };
