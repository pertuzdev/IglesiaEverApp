import { ImageProps } from 'react-native';

export type CarouselSlideProps = {
  img: ImageProps;
  text: string;
  selectedIndex: number;
  prevIndex: number;
  scrollDirection: 'up' | 'down';
  totalLengthOfCarousel: number;
  onPress: () => void;
};
