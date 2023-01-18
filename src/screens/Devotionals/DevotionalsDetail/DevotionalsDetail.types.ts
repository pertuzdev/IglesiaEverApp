import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TDevotionalsStackParamsList } from '../../../router/Devotionals.stack';

export type TDevotionalsDetailScreenRouteProps = RouteProp<
  TDevotionalsStackParamsList,
  'DevotionalsDetail'
>;

export type TDevotionalsDetailScreenNavigationProps = StackNavigationProp<
  TDevotionalsStackParamsList,
  'DevotionalsDetail'
>;
