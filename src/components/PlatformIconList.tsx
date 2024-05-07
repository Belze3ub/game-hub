import { HStack, Icon } from '@chakra-ui/react';
import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaAndroid,
  FaApple,
  FaLinux,
} from 'react-icons/fa';
import { SiNintendo } from 'react-icons/si';
import { MdPhoneIphone } from 'react-icons/md';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { Platform } from '../entities/Platform';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
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
    <HStack marginY={'5px'}>
      {platforms.map((platform) => {
        return (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color="gray.500"
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;
