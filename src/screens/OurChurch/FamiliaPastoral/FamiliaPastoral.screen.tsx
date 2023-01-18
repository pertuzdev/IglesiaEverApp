import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TertiaryCard } from '../../../components/TertiaryCard/TertiaryCard';
import { Header } from '../../../components/Header/Header';
import { Typography } from '../../../components/Typography/Typography';
import { FourthCard } from '../../../components/FourthCard/FourthCard';
import { colors } from '../../../utils/colors';
import { styles } from './FamiliaPastoral.styles';

export const FamiliaPastoral = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        withAnimation={false}
        title='Familia Pastoral'
        onPress={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.innerContent}>
          <Typography style={styles.title} variant='H1' color={colors.grey7}>
            Pastores
          </Typography>
          <TertiaryCard />
          <TertiaryCard />
          <Typography style={styles.title} variant='H1' color={colors.grey7}>
            Familia
          </Typography>
          <FourthCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
