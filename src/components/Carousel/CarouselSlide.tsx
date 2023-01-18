import React, { useEffect, useRef } from 'react';
import { Dimensions, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Typography } from '../Typography/Typography';
import { styles } from './Carousel.styles';
import { colors } from '../../utils/colors';
import { CarouselSlideProps } from './Carousel.types';

const { height } = Dimensions.get('screen');

export const Slides: React.FC<CarouselSlideProps> = ({
  img,
  text,
  selectedIndex,
  prevIndex,
  scrollDirection,
  totalLengthOfCarousel,
  onPress,
}) => {
  const animationTypography = useRef(useSharedValue(0)).current;
  const animationTypographyStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: animationTypography.value,
        },
      ],
    };
  });

  useEffect(() => {
    if (
      (scrollDirection === 'up' && selectedIndex < prevIndex) ||
      (scrollDirection === 'up' && selectedIndex === 0) ||
      selectedIndex === 0
    ) {
      animationTypography.value = height;
      animationTypography.value = withSpring(height / 2, {
        mass: 1,
        damping: 15,
      });
    } else if (
      (scrollDirection === 'down' && selectedIndex > prevIndex) ||
      (scrollDirection === 'down' && totalLengthOfCarousel) ||
      selectedIndex === totalLengthOfCarousel
    ) {
      animationTypography.value = 0;
      animationTypography.value = withSpring(height / 2, { mass: 1, damping: 15 });
    }
  }, [selectedIndex, scrollDirection]);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85}>
      <View style={styles.contentContainer}>
        <Image
          style={[StyleSheet.absoluteFillObject, styles.imageContainer]}
          source={img}
          resizeMode='cover'
        />
        <Animated.View style={[styles.typographyContainer, animationTypographyStyle]}>
          <Typography bold style={styles.typography} variant='H1' color={colors.white}>
            {text}
          </Typography>
        </Animated.View>
        <View style={styles.overlay} />
      </View>
    </TouchableOpacity>
  );
};
