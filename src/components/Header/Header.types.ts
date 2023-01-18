import { SharedValue } from 'react-native-reanimated';

export type HeaderProps = {
  title: string;
  onPress?: () => void;
  withAnimation: boolean;
  scrollY?: SharedValue<number>;
};
