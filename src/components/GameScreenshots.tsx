import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const screenshots = data?.results;
  if (!screenshots || screenshots.length === 0)
    return null;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} marginTop={2}>
      {screenshots.map((screenshot) => (
        <Image key={screenshot.image} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
