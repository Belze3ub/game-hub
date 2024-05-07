import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game"
import CriticScore from "./CriticScore";
import GameDetail from "./GameDetail";

interface Props {
  game: Game;
}

const GameAttributes = ({game}: Props) => {
  return (
    <SimpleGrid columns={2} as={'dl'}>
      <GameDetail title="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameDetail>

      <GameDetail title="Metascore">
        <CriticScore score={game.metacritic}></CriticScore>
      </GameDetail>
      <GameDetail title="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameDetail>
      <GameDetail title="Publishers">
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GameDetail>
    </SimpleGrid>
  );
}

export default GameAttributes