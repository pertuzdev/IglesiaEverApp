import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ChevronRight } from '../../assets/svg';
import { Typography } from '../Typography/Typography';
import { colors } from '../../utils/colors';
import { styles } from './SecondaryCard.styles';
import { SecondaryCardProps } from './SecondaryCard.types';

export const SecondaryCard: React.FC<SecondaryCardProps> = ({ title, onPress }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.innerContainer}>
          <Typography variant='H3' color={colors.dark}>
            {title}
          </Typography>
          <ChevronRight width={24} height={24} color={colors.grey2} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
