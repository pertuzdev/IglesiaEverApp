import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SecondaryCard } from '../../components/SecondaryCard/SecondaryCard';
import { Header } from '../../components/Header/Header';
import { styles } from './OurChurch.styles';

const churchOptions = [
  {
    title: 'Historia',
    navigateTo: 'HistoriaScreen',
  },
  {
    title: 'Confesión de fé de iglesia EVER',
    navigateTo: 'ConfesionFeScreen',
  },
  {
    title: 'Familia pastoral',
    navigateTo: 'FamiliaPastoralScreen',
  },
  {
    title: 'Ministerios',
  },
  {
    title: 'Contáctanos',
  },
];

export const OurChurchScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header withAnimation={false} title="Nuestra Iglesia" />
      <FlatList
        style={styles.flatlist}
        contentContainerStyle={styles.flatlistContent}
        data={churchOptions}
        renderItem={({ item }) => (
          <SecondaryCard
            onPress={() => navigation.navigate(item.navigateTo)}
            title={item.title}
          />
        )}
      />
    </SafeAreaView>
  );
};
