import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput';

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack padding="1rem">
      <Image src={logo} boxSize="4rem" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar