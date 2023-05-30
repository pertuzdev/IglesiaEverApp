import React, { useState, useCallback, useMemo, useRef } from 'react';
import { FlatList, Dimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Slides } from './CarouselSlide';

const { height } = Dimensions.get('screen');
/**
 * 
 * @param param0 
 * @returns 
 * use_frameworks! :linkage => :static
$RNFirebaseAsStaticFramework = true
 */
export const Carousel: React.FC<any> = ({ images }) => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [offset, SetOffset] = useState(0);
  const scrollDirection = useRef<'up' | 'down'>('down');
  const totalLengthOfCarousel = images.length - 1;

  const finalScrollDirection = useMemo(
    () => scrollDirection.current,
    [scrollDirection.current],
  );

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > offset ? 'down' : 'up';
    SetOffset(currentOffset);
    scrollDirection.current = direction;
  };

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }) => {
      if (viewableItems && viewableItems.length) {
        const currentViewableItem = viewableItems[0];
        const currentViewableItemIndex = currentViewableItem.index;
        setSelectedIndex(currentViewableItemIndex);
      }
    },
    [setSelectedIndex],
  );

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 10,
  };

  return (
    <FlatList
      onScroll={onScroll}
      pagingEnabled
      initialScrollIndex={0}
      snapToInterval={height}
      decelerationRate="fast"
      bounces={false}
      showsVerticalScrollIndicator={false}
      data={images}
      initialNumToRender={1}
      keyExtractor={(item) => item.text}
      renderItem={({ item }) => (
        <Slides
          key={item.text}
          text={item.text}
          img={item.img}
          prevIndex={selectedIndex !== 0 ? totalLengthOfCarousel : 0}
          selectedIndex={selectedIndex}
          scrollDirection={finalScrollDirection}
          totalLengthOfCarousel={totalLengthOfCarousel}
          onPress={() => navigation.navigate(item.navigateTo)}
        />
      )}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
    />
  );
};
