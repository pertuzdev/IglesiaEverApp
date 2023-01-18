import React from 'react';
import { View } from 'react-native';
import { Carousel } from '../../components/Carousel/Carousel';
import ImageOne from '../../assets/images/optionOne.png';
import ImageTwo from '../../assets/images/optionTwo.png';
import Six from '../../assets/images/six.png';
// import ImageFour from '../../assets/images/optionFour.png';
import ImageFive from '../../assets/images/optionFive.png';
import { styles } from './Home.styles';

export const HomeScreen = () => {
  const images = [
    {
      img: Six,
      text: 'Anuncios',
      navigateTo: 'AnnouncementsScreen',
    },
    {
      img: ImageOne,
      text: 'Donaciones',
      navigateTo: '',
    },
    {
      img: ImageFive,
      text: 'Misiones',
      navigateTo: '',
    },
    {
      img: ImageTwo,
      text: 'Jóvenes',
      navigateTo: '',
    },
  ];

  return (
    <View style={styles.container}>
      <Carousel images={images} />
    </View>
  );
};
