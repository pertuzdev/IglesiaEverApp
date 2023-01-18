import { StyleSheet } from 'react-native';
import { moderateScale } from '../utils/scale';

export const styles = StyleSheet.create({
  bottomBarContainer: {
    flex: 1,
  },
  lottieIcon: {
    height: moderateScale(29),
  },
  screen: {
    backgroundColor: 'white',
  },
  headerRightIcon: {
    width: moderateScale(45),
    height: moderateScale(45),
  },
});
