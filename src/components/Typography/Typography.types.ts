import { ReactNode } from 'react';
import { StyleProp, TextStyle, ViewStyle, TextProps } from 'react-native';

export type typographyType = 'H1' | 'H2' | 'H3' | 'P';

export interface TTypographyProps extends TextProps {
  color?: string;
  variant: typographyType;
  style?: StyleProp<ViewStyle> & StyleProp<TextStyle>;
  children: ReactNode;
  bold?: boolean;
}
