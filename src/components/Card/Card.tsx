import React from 'react';
import Animated, { useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
import { Typography } from '../Typography/Typography';
import { colors } from '../../utils/colors';
import { styles, CARD_HEIGHT, MARGIN_BOTTOM } from './Card.styles';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({ title, subtitle, index, scrollY, cardHeight }) => {
  const CHOSEN_HEIGHT = cardHeight || CARD_HEIGHT;
  const heightForCard = {
    height: cardHeight || CARD_HEIGHT,
  };
  const TOTAL_ITEM_SIZE = CHOSEN_HEIGHT + MARGIN_BOTTOM;
  const inputRangeCardSize = [-1, 0, TOTAL_ITEM_SIZE * index, TOTAL_ITEM_SIZE * (index + 2)];
  const outputRangeCardSize = [1, 1, 1, 0];
  const inputRangeCardOpacity = [
    -1,
    0,
    TOTAL_ITEM_SIZE * index,
    TOTAL_ITEM_SIZE * (index + 1.5),
  ];
  const outputRangeCardOpacity = [1, 1, 1, 0];

  const scaleCard = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollY.value,
            inputRangeCardSize,
            outputRangeCardSize,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  const opacityCard = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        inputRangeCardOpacity,
        outputRangeCardOpacity,
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <Animated.View style={[styles.card, scaleCard, opacityCard, heightForCard]}>
      <Typography variant='H2' color={colors.dark}>
        {title}
      </Typography>
      <Typography style={styles.subtitle} numberOfLines={3} variant='H3' color={colors.grey6}>
        {subtitle}
      </Typography>
    </Animated.View>
  );
};
