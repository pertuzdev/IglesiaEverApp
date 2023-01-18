import React from 'react';
import { View, Image } from 'react-native';
import { Typography } from '../Typography/Typography';
import { colors } from '../../utils/colors';
import { styles } from './FourthCard.styles';
import { FourthCardProps } from './FourthCard.types';

export const FourthCard: React.FC<FourthCardProps> = ({ title, onPress }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
        }}
        style={styles.image}
      />
      <View style={styles.bottomContainer}>
        <Typography style={styles.title} variant='H2' color={colors.grey7}>
          La Familia Pastoral
        </Typography>
        <Typography variant='H3' color={colors.dark}>
          eirfjoierfjeorfjeriofjeiorfjeoifjeoiuwghiuoerwhgiuehgireuohgieurwhgieuorwgheioruwgheiuorghieuowrghieuorghieuowghieuorwghieorwhgierwhgueirgheuirwgheiuwgheiuwrgheiorugheiourghueio
        </Typography>
      </View>
    </View>
  );
};
