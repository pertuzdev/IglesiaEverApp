import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { getPosts } from '../../api/everAPI/services';
import { LoadingFullScreen } from '../../components/LoadingFullScreen/LoadingFullScreen';
import { Header } from '../../components/Header/Header';
import eight from '../../assets/images/eight.png';
import { Card } from '../../components/Card/Card';
import { styles } from './Devotionals.styles';
import { TDevotionalsScreenNavigationProps } from './Devotionals.types';

export const DevotionalsScreen = () => {
  const navigation = useNavigation<TDevotionalsScreenNavigationProps>();
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const scrollY = useRef(useSharedValue(0)).current;
  const [isLoading, setIsLoading] = useState(false);
  const [devotionals, setDevotionals] = useState<any>(undefined);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const getDevotionals = await getPosts();
        setDevotionals(getDevotionals?.data?.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(true);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header withAnimation={false} title='Devocionales' />
      <View style={styles.container}>
        <Image blurRadius={10} source={eight} resizeMode='cover' style={styles.image} />
        {isLoading ? (
          <LoadingFullScreen variant='two' />
        ) : (
          <AnimatedFlatList
            onScroll={onScroll}
            data={devotionals}
            contentContainerStyle={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DevotionalsDetail', {
                    title: (item as any)?.attributes?.title,
                    image: (item as any)?.attributes?.image?.data?.attributes?.formats?.medium
                      ?.url,
                    subtitle: (item as any)?.attributes?.content,
                  })
                }
                activeOpacity={0.9}
              >
                <Card
                  cardHeight={150}
                  title={(item as any)?.attributes?.title}
                  index={index}
                  scrollY={scrollY}
                  subtitle={(item as any)?.attributes?.content}
                  key={(item as any)?.id}
                />
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
