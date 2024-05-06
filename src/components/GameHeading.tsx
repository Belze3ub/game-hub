import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatformSelector from '../hooks/usePlatform';
import gameQueryStore from '../gameQueryStore';

const GameHeading = () => {
  const genreId = gameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = gameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatformSelector(platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading as="h1" size="2xl" marginBottom={4}>
      {heading}
    </Heading>
  );
};
export default GameHeading;
