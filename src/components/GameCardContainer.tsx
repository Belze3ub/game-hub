import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      // position="relative"
      transition="transform 0.2s"
      _hover={{
        transform: 'scale(1.05)',
        // zIndex: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
