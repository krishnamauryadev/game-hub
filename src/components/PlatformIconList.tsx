import { FaWindows } from "react-icons/fa";
import { IoMdBrowsers } from "react-icons/io";
import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IconBase, IconType } from "react-icons";

interface Props {
  platforms: string[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    "PC (Windows)": FaWindows,
    "Web Browser": IoMdBrowsers,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
