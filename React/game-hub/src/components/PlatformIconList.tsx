import { HStack, Icon } from "@chakra-ui/react";
import type { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons"; // 导入 IconType

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  // slug 到图标组件的映射
  const iconMap: { [key: string]: IconType } = {
    // 使用索引签名
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div>
      <HStack>
        {platforms.map((p) => (
          <Icon key={p.id} as={iconMap[p.slug]} color="gray.500"></Icon>
        ))}
      </HStack>
    </div>
  );
};

export default PlatformIconList;
