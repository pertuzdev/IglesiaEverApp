import React from 'react';
import { View, Image } from 'react-native';
import { Typography } from '../Typography/Typography';
import { colors } from '../../utils/colors';
import { styles } from './TertiaryCard.styles';
import { TertiaryCardProps } from './TertiaryCard.types';

export const TertiaryCard: React.FC<TertiaryCardProps> = ({ title, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
          }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Typography style={styles.title} variant='H2' color={colors.grey7}>
            Pedro González
          </Typography>
          <Typography variant='H3' color={colors.dark}>
            eirfjoierfjeorfjeriofjeiorfjeoifjeoiuwghiuoerwhgiuehgireuohgieurwhgieuorwgheioruwgheiuorghieuowrghieuorghieuowghieuorwghieorwhgierwhgueirgheuirwgheiuwgheiuwrgheiorugheiourghueio
          </Typography>
        </View>
      </View>
    </View>
  );
};
