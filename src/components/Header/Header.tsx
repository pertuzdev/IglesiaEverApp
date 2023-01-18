import React from 'react';
import { Image, TouchableOpacity, Dimensions, View } from 'react-native';
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import { Typography } from '../Typography/Typography';
import EverLogo from '../../assets/images/ever_official_image.png';
import { BackArrow } from '../../assets/svg';
import {
  styles,
  HEADER_SCROLL_DISTANCE,
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
} from './Header.styles';
import { HeaderProps } from './Header.types';
import { colors } from '../../utils/colors';

const { height } = Dimensions.get('screen');
const HEADER_SCROLL_DISTANCE_TO_HIDE = height / 2;

export const Header: React.FC<HeaderProps> = ({
  title,
  onPress,
  withAnimation = true,
  scrollY,
}) => {
  const stylesHeader = () => {
    if (withAnimation) {
      if (scrollY?.value === 0) {
        if ('value' in scrollY) {
          return useAnimatedStyle(() => {
            return {
              opacity: interpolate(
                scrollY.value,
                [0, HEADER_SCROLL_DISTANCE, HEADER_SCROLL_DISTANCE_TO_HIDE],
                [1, 0.5, 0],
                Extrapolate.CLAMP,
              ),
              height: interpolate(
                scrollY.value,
                [0, HEADER_SCROLL_DISTANCE, HEADER_SCROLL_DISTANCE_TO_HIDE],
                [HEADER_MAX_HEIGHT, HEADER_MAX_HEIGHT / 2, HEADER_MIN_HEIGHT],
                Extrapolate.CLAMP,
              ),
            };
          });
        }
      }
    } else {
      return {};
    }
  };

  const animatedStyles = stylesHeader();

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      {onPress ? (
        <TouchableOpacity onPress={onPress}>
          <BackArrow width={24} height={24} color={colors.dark} />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyBackgroundContainer} />
      )}
      <Typography variant='H3' color={colors.dark} bold>
        {title}
      </Typography>
      <Image source={EverLogo} style={styles.headerRightIcon} />
    </Animated.View>
  );
};
