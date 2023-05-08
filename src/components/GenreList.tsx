import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import { Spinner } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <Link onClick={() => onSelectGenre(genre)}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="2rem"
                objectFit="cover"
                borderRadius="10px"
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
