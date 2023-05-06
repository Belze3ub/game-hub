import { Badge } from "@chakra-ui/react"

interface Props {
  score: number;
}

const Score = ({ score }: Props) => {
  const color = score >= 90 ? 'green' : score > 60 ? 'yellow' : '';

  return (
    <Badge borderRadius='5px' paddingX='5px' colorScheme={color}>
      {score}
    </Badge>
  );
};

export default Score