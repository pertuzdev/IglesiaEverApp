import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../utils/colors';
import { moderateScale } from '../../utils/scale';
const { width, height } = Dimensions.get('screen');

export const IMAGE_SIZE = 80;
export const SPACING_BETWEEN_THUMB = 10;

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: '100%',
    height: '100%',
    ...StyleSheet.absoluteFillObject,
  },
  // Announcement container
  announcementContainer: {
    width: width,
    height: height,
    position: 'relative',
  },
  imageContainer: {
    width: width,
    height: height,
  },
  typography: {
    fontSize: moderateScale(60),
    marginLeft: moderateScale(24),
    position: 'absolute',
  },
  typographyContainer: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  // Thumb Announcement container
  thumbAnnouncementContainer: {
    position: 'absolute',
    bottom: 80,
  },
  thumbImageContainer: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: 12,
    marginRight: SPACING_BETWEEN_THUMB,
    borderWidth: 2,
  },
  thumbFlatlistContainer: {
    paddingHorizontal: SPACING_BETWEEN_THUMB,
  },
});
