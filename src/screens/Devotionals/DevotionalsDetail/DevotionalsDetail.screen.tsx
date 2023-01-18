import React, { useRef } from 'react';
import {
  View,
  Image,
  SafeAreaView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { useRoute } from '@react-navigation/native';
import EverLogo from '../../../assets/images/ever_official_image.png';
import { Typography } from '../../../components/Typography/Typography';
import { Header } from '../../../components/Header/Header';
import { colors } from '../../../utils/colors';
import { styles } from './DevotionalsDetail.styles';
import {
  TDevotionalsDetailScreenRouteProps,
  TDevotionalsDetailScreenNavigationProps,
} from './DevotionalsDetail.types';

export const DevotionalsDetail = () => {
  const navigation = useNavigation<TDevotionalsDetailScreenNavigationProps>();
  const route = useRoute<TDevotionalsDetailScreenRouteProps>();
  const scrollY = useRef(useSharedValue(0)).current;
  const { title, image, subtitle } = route.params;

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header
        withAnimation
        onPress={() => navigation.goBack()}
        title='Devocional'
        scrollY={scrollY}
      />
      <Animated.ScrollView scrollEventThrottle={16} onScroll={onScroll}>
        <View style={styles.container}>
          <Image
            resizeMode='cover'
            source={image ? { uri: image } : EverLogo}
            style={styles.image}
          />
          <View style={styles.innerContainer}>
            <Typography style={styles.devotionalTitle} variant='H2' color={colors.dark}>
              {title}
            </Typography>
            <Typography style={styles.subtitle} variant='H3' color={colors.grey7}>
              {subtitle}
            </Typography>
          </View>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
};
