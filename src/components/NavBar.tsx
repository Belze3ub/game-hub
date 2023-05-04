import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} width='4rem' />
      <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar