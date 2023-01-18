import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import Loader from '../../assets/json/loader.json';
import { styles } from './LoadingFullScreen.styles';
import { LoadingFullScreenProps } from './LoadingFullScreen.types';

export const LoadingFullScreen: React.FC<LoadingFullScreenProps> = ({ variant = 'one' }) => {
  const transparentBackground = { backgroundColor: 'transparent' };
  switch (variant) {
    case 'one':
      return (
        <View style={styles.container}>
          <LottieView style={styles.lottieContainer} source={Loader} autoPlay loop />
        </View>
      );
    case 'two':
      return (
        <View style={[styles.container, transparentBackground]}>
          <LottieView style={styles.lottieContainer} source={Loader} autoPlay loop />
        </View>
      );
    default:
      return (
        <View style={styles.container}>
          <LottieView style={styles.lottieContainer} source={Loader} autoPlay loop />
        </View>
      );
  }
};
