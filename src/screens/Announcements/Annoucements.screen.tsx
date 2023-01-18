import React, { useRef, useEffect, useState, useCallback } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAnnouncemets } from '../../api/everAPI/services';
import { Typography } from '../../components/Typography/Typography';
import { LoadingFullScreen } from '../../components/LoadingFullScreen/LoadingFullScreen';
import { styles, IMAGE_SIZE, SPACING_BETWEEN_THUMB } from './Announcements.styles';
import { colors } from '../../utils/colors';
import { AnnouncementProps, ThumbnailAnnouncementProps } from './Announcements.types';

const { width } = Dimensions.get('screen');

const Announcement: React.FC<AnnouncementProps> = ({ img, text }) => {
  return (
    <View style={styles.announcementContainer}>
      <Image
        style={[StyleSheet.absoluteFillObject, styles.imageContainer]}
        source={{ uri: img }}
        resizeMode='contain'
      />
      <View style={styles.typographyContainer}>
        <Typography bold style={styles.typography} variant='H1' color={colors.white}>
          {text}
        </Typography>
      </View>
      <View style={styles.overlay} />
    </View>
  );
};

const ThumbAnnouncement: React.FC<ThumbnailAnnouncementProps> = ({
  img,
  activeIndex,
  index,
  onPress,
}) => {
  const borderColor = activeIndex === index ? colors.lightBlue1 : 'transparent';
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        style={[
          styles.thumbImageContainer,
          {
            borderColor,
          },
        ]}
        source={{ uri: img }}
        resizeMode='cover'
      />
    </TouchableOpacity>
  );
};

export const AnnouncementsScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [announcements, setAnnouncements] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const announcementRef = useRef<FlatList>(null);
  const thumbAnnouncementRef = useRef<FlatList>(null);
  const navigation = useNavigation();

  const handleThumbnailPositionInScreen = (index: number) => {
    if (index * (IMAGE_SIZE + SPACING_BETWEEN_THUMB) - IMAGE_SIZE / 2 > width / 2) {
      thumbAnnouncementRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING_BETWEEN_THUMB) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbAnnouncementRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  const scrollToIndex = (index: number) => {
    setActiveIndex(index);
    announcementRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    handleThumbnailPositionInScreen(index);
  };

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }) => {
      if (viewableItems && viewableItems.length) {
        const currentViewableItem = viewableItems[0];
        const currentViewableItemIndex = currentViewableItem.index;
        setActiveIndex(currentViewableItemIndex);
        handleThumbnailPositionInScreen(currentViewableItemIndex);
      }
    },
    [setActiveIndex],
  );

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 10,
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const getAnnouncements = await getAnnouncemets();
        setAnnouncements(getAnnouncements?.data?.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (isLoading) {
      navigation.setOptions({ headerShown: false });
    } else {
      navigation.setOptions({ headerShown: true });
    }
  }, [isLoading]);

  if (isLoading) return <LoadingFullScreen variant='one' />;
  return (
    <View style={styles.container}>
      <FlatList
        ref={announcementRef}
        bounces={false}
        data={announcements}
        pagingEnabled
        decelerationRate='fast'
        showsHorizontalScrollIndicator={false}
        horizontal
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        renderItem={({ item }) => {
          return (
            <Announcement
              img={item?.attributes?.image?.data?.attributes?.formats?.medium?.url}
              text={item.text}
            />
          );
        }}
      />
      <FlatList
        ref={thumbAnnouncementRef}
        data={announcements}
        style={styles.thumbAnnouncementContainer}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.thumbFlatlistContainer}
        horizontal
        renderItem={({ item, index }) => (
          <ThumbAnnouncement
            onPress={() => scrollToIndex(index)}
            activeIndex={activeIndex}
            index={index}
            img={item?.attributes?.image?.data?.attributes?.formats?.medium?.url}
          />
        )}
      />
    </View>
  );
};
