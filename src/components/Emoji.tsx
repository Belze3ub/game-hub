import skip from '../assets/skip.webp';
import recommended from '../assets/recommended.webp';
import exceptional from '../assets/exceptional.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emoji = ({rating}: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: skip, alt: 'skip', boxSize: '1.5rem' },
    4: { src: recommended, alt: 'recommended', boxSize: '1.5rem' },
    5: { src: exceptional, alt: 'exceptional', boxSize: '2rem' },
  };
  return (
    <Image {...emojiMap[rating]} marginTop={1} />
  )
}
export default Emoji