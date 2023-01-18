import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { moderateScale } from '../../utils/scale';

export const HEADER_MAX_HEIGHT = moderateScale(70); // set the initial height
export const HEADER_MIN_HEIGHT = 0; // set the height on scroll
export const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(15),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: HEADER_MAX_HEIGHT,
  },
  headerRightIcon: {
    width: moderateScale(45),
    height: moderateScale(45),
  },
  emptyBackgroundContainer: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
});
