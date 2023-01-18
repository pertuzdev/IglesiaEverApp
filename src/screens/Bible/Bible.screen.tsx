import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, NativeScrollEvent, NativeSyntheticEvent, Image } from 'react-native';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { getBooks } from '../../api/bibleAPI/services';
import eight from '../../assets/images/eight.png';
import { Card } from '../../components/Card/Card';
import { styles } from './Bible.styles';

export const BibleScreen = () => {
  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
  const scrollY = useRef(useSharedValue(0)).current;
  const [reinaValera, setReinaValera] = useState<any>(undefined);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.value = event.nativeEvent.contentOffset.y;
  };

  useEffect(() => {
    (async () => {
      try {
        // const bibles = await getBibles();
        // console.log('bibles?.data', bibles?.data?.data)
        // const findReinaValera = bibles?.data?.data?.find(
        //   (bible) => bible?.id === '592420522e16049f-01',
        // );
        // setReinaValera(findReinaValera);
        const getChapters = await getBooks('06125adad2d5898a-01');
        // console.log('getChapters', getChapters?.data?.data);
        setReinaValera(getChapters?.data?.data);
        // console.log('response', response);
      } catch (err) {
        console.log(err, 'err');
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Image blurRadius={10} source={eight} resizeMode='cover' style={styles.image} />
      <AnimatedFlatList
        onScroll={onScroll}
        data={reinaValera}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Card
            title={(item as any)?.name}
            index={index}
            scrollY={scrollY}
            subtitle={(item as any)?.nameLong}
            key={(item as any)?.name}
          />
        )}
      />
    </View>
  );
};
